import { useCallback, useEffect, useState } from "react";
import cx from "classnames";
import DancinText from "../../components/FancyText/DancinText";
import content from "./content";
import "./styles.scss";

const Home = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const _onHandleKeyDown = useCallback(() => {
    if (currentIdx < content.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsActive(true);

      setTimeout(() => {
        setIsActive(false);
      }, 800);
    }
  }, [currentIdx]);

  useEffect(() => {
    window.addEventListener("keydown", _onHandleKeyDown);
    window.addEventListener("touchstart", _onHandleKeyDown);

    return () => {
      window.removeEventListener("keydown", _onHandleKeyDown);
      window.removeEventListener("touchstart", _onHandleKeyDown);
    };
  }, [_onHandleKeyDown]);

  const renderContent = () =>
    content.map((content, i) => {
      if (i <= currentIdx) return content;
      return null;
    });

  return (
    <>
      <h2 className="mb-2">
        <DancinText text="ABOUT WTH?" />
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div
          id="home__key"
          className={cx("home__key lg:order-2 text-txt-note", {
            stop: currentIdx >= content.length - 1,
          })}
        >
          Press any key to continue
        </div>

        <div
          id="home__content"
          className={cx("home__content mt-5 lg:mt-2", { active: isActive })}
        >
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default Home;
