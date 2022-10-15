import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import Quote from "./Quote";

interface ITypingState {
  currentPos: number;
  countError: number;
  word: string;
}

const TypeRacer = () => {
  const mock = "Never accept ultimatums, conventional wisdom, or absolutes.";
  const [quote, setQuote] = useState<string[]>([]);

  const [typingState, setTypingState] = useState<ITypingState>({
    currentPos: 0,
    countError: 0,
    word: "",
  });

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

  const _onHandleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const { key } = e;

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
      } else {
        setTypingState({
          ...typingState,
          countError: countError + 1,
          word: word + key.replace(" ", "\u00A0"),
        });
      }
    },
    [quote, typingState, _onDelete]
  );

  useEffect(() => {
    if (typingState.currentPos === quote.length) {
      return;
    }

    window.addEventListener("keydown", _onHandleKeyDown);

    return () => {
      window.removeEventListener("keydown", _onHandleKeyDown);
    };
  }, [_onHandleKeyDown, quote.length, typingState.currentPos]);

  useLayoutEffect(() => {
    setQuote(mock.split(""));
  }, []);

  return (
    <div>
      <h2 className="page-header">Type Racer 🏎💨</h2>
      <div className="mt-4 p-8 border border-dashed border-divider rounded-md">
        <Quote
          quote={quote}
          currentPos={typingState.currentPos}
          isError={typingState.countError > 0}
        />
      </div>
      <p className="underline underline-offset-2 px-8 py-4 mt-4 text-xl bg-slate-900 rounded-md h-16">
        {typingState.word}
      </p>
    </div>
  );
};

export default TypeRacer;
