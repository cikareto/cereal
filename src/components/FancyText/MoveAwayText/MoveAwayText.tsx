import SplitText from "../SplitText";
import "./styles.scss";

const MoveAwayText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <SplitText
        text={text}
        type="move-away-text"
        translateX={20}
        translateY={20}
      />
    </>
  );
};

export default MoveAwayText;
