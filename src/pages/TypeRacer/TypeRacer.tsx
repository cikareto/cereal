import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { getQuote } from "../../apis/quote";
import EnterButton from "../../components/Button/EnterButton";
import TrafficJam from "../../components/TrafficJam";
import useGameState from "../../hooks/useGameState";
import Quote from "./Quote";

interface ITypingState {
  currentPos: number;
  countError: number;
  word: string;
}

const initTypingState: ITypingState = {
  currentPos: 0,
  countError: 0,
  word: "",
};

const TypeRacer = () => {
  const [{ quote, loading }, setQuote] = useState<{
    quote: string[];
    loading: boolean;
  }>({
    quote: [],
    loading: false,
  });

  const [{ state: gameState, countdown }, game] = useGameState();

  const [typingState, setTypingState] = useState<ITypingState>(initTypingState);

  const fetchQuote = (callback?: () => void) => {
    setQuote({ quote: [], loading: true });

    const _getQuote = async () => {
      const quote = await getQuote();
      setQuote({ quote: quote.split(""), loading: false });
      callback && callback();
    };

    _getQuote();
  };

  const _onDelete = useCallback(
    ({ currentPos, countError, word }: ITypingState) => {
      const _newState: ITypingState = {
        currentPos: currentPos - +(countError === 0),
        countError: countError - +(countError > 0),
        word: "",
      };

      if (quote[_newState.currentPos] !== " " && word === "") {
        const _lastIndexOfSpace = quote
          .slice(0, _newState.currentPos)
          .lastIndexOf(" ");

        const _startIdx = Math.max(_lastIndexOfSpace, 0);

        _newState.word = quote.slice(_startIdx, _newState.currentPos).join("");
      } else {
        _newState.word = word.slice(0, -1);
      }

      return _newState;
    },
    [quote]
  );

  const _onRacing = useCallback(
    (key: string) => {
      if (key.length !== 1 && key !== "Backspace") {
        return;
      }

      const { currentPos, countError, word } = typingState;

      if (key === "Backspace") {
        if (currentPos > 0 || countError > 0) {
          const newState = _onDelete(typingState);

          setTypingState(newState);
        }
      } else if (countError === 0 && key === quote[currentPos]) {
        setTypingState({
          ...typingState,
          currentPos: currentPos + 1,
          word: key === " " ? "" : word + key,
        });

        if (currentPos + 1 === quote.length) {
          game.onFinished();
        }
      } else {
        setTypingState({
          ...typingState,
          countError: countError + 1,
          word: word + key.replace(" ", "\u00A0"),
        });
      }
    },
    [_onDelete, game, quote, typingState]
  );

  const _onReady = useCallback(() => {
    if (gameState.finished) {
      fetchQuote(() => game.onReady(5000));
    } else {
      game.onReady(5000);
    }
    setTypingState(initTypingState);
  }, [game, gameState.finished]);

  const _onEnter = useCallback(
    (key: string) => {
      if (key === "Enter") {
        _onReady();
      }
    },
    [_onReady]
  );

  const _onHandleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;

      if (gameState.started) {
        _onRacing(key);
      } else {
        _onEnter(key);
      }
    },
    [_onEnter, _onRacing, gameState.started]
  );

  useEffect(() => {
    window.addEventListener("keydown", _onHandleKeyDown);

    return () => {
      window.removeEventListener("keydown", _onHandleKeyDown);
    };
  }, [_onHandleKeyDown, quote.length, typingState.currentPos]);

  useLayoutEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      <div className="flex justify-between">
        <h2 className="page-header">Type Racer 🏎💨</h2>
        <EnterButton
          label={`Press Enter to Start ${gameState.finished ? "Again" : ""}`}
          icon={<span className="ml-2">🏁</span>}
          disabled={gameState.started || countdown.isCounting}
          onClick={_onReady}
        />
      </div>
      <div className="mt-4 p-8 border border-dashed border-divider rounded-md">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Quote
            quote={quote}
            disabled={gameState.ready}
            currentPos={typingState.currentPos}
            isError={typingState.countError > 0}
          />
        )}
      </div>
      <div className="flex justify-between items-center px-8 py-3 mt-4 bg-slate-900 rounded-md h-16">
        <p className="underline underline-offset-2 text-xl text-txt-default">
          {typingState.word}
        </p>
        <div className="flex h-full items-center gap-2">
          {countdown.timer > 0 && (
            <p className="font-bold">{countdown.timer / 1000} s</p>
          )}
          <TrafficJam
            disabled={gameState.ready || loading}
            timer={countdown.timer}
          />
        </div>
      </div>
    </>
  );
};

export default TypeRacer;
