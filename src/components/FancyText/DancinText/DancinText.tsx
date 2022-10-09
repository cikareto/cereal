import SplitText from "../SplitText";
import "./styles.scss";

const DancinText: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <SplitText
        text={text}
        type="dancin-text"
        translateX={4}
        translateY={20}
      />
    </>
  );
};

export default DancinText;
