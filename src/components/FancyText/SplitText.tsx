import { CSSProperties } from "react";
import cx from "classnames";

interface ISplitText {
  text: string;
  type: string;
  translateX: number;
  translateY: number;
}

const SplitText: React.FC<ISplitText> = ({
  text,
  type,
  translateX,
  translateY,
}) => {
  return (
    <>
      {Array.from(text).map((letter, i) => {
        const style = {
          "--translate-x": Math.random() * translateX - translateX / 2 + "px",
          "--translate-y": Math.random() * translateY - translateY / 2 + "px",
        } as CSSProperties;

        return (
          <div
            key={`${text}-${i}`}
            className={cx(type, "inline-block cursor-default")}
            style={style}
          >
            <span>{letter === " " ? "\u00A0" : letter}</span>
          </div>
        );
      })}
    </>
  );
};

export default SplitText;
