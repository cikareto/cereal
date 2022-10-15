import { useEffect, useReducer } from "react";

interface IGameAction {
  /** @param countdown count down timeout in ms before game start */
  onReady(countdown?: number): void;
  onStart(): void;
  onFinished(): void;
}

interface IGameState {
  state: {
    ready: boolean;
    started: boolean;
    finished: boolean;
  };
  countdown: {
    isCounting: boolean;
    timer: number;
  };
}

const initGameState: IGameState = {
  state: {
    ready: true,
    started: false,
    finished: false,
  },
  countdown: {
    isCounting: false,
    timer: 0,
  },
};

const reducer = (
  state: IGameState,
  action: { type: "countdown" | "ready" | "start" | "finished"; timer?: number }
): IGameState => {
  switch (action.type) {
    case "countdown":
      return {
        ...initGameState,
        countdown: {
          isCounting: !!action.timer,
          timer: action.timer || 0,
        },
      };
    case "ready":
      return {
        ...initGameState,
        countdown: {
          isCounting: !!action.timer,
          timer: action.timer || 0,
        },
      };
    case "start":
      return {
        ...initGameState,
        state: {
          ready: false,
          started: true,
          finished: false,
        },
      };
    case "finished":
      return {
        ...initGameState,
        state: {
          ready: false,
          started: false,
          finished: true,
        },
      };
    default:
      throw new Error();
  }
};

const useGameState = (): [IGameState, IGameAction] => {
  const [state, dispatch] = useReducer(reducer, initGameState);

  useEffect(() => {
    const { countdown } = state;

    if (!countdown.isCounting) {
      return;
    }

    const interval = setInterval(() => {
      const _time = countdown.timer - 1000;
      const _isCounting = _time > 0;

      if (_isCounting) {
        dispatch({ type: "countdown", timer: _time });
      } else {
        dispatch({ type: "start" });
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.countdown.timer]);

  return [
    state,
    {
      onReady(countdown?: number) {
        dispatch({ type: "ready", timer: countdown });
      },
      onStart() {
        dispatch({ type: "start" });
      },
      onFinished() {
        dispatch({ type: "finished" });
      },
    },
  ];
};

export default useGameState;
