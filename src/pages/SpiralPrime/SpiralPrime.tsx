import { useMemo, useState } from "react";
import cx from "classnames";
import ResizableTextBox from "../../components/Box/ResizableTextBox";
import { getSpiralPrime } from "../../features/spiralPrime";
import SpiralPrimeForm from "./SpiralPrimeForm";

const SpiralPrime = () => {
  const [_size, _setSize] = useState<number>(0);

  const spiralPrime = useMemo(() => getSpiralPrime(_size), [_size]);

  const rowLength = spiralPrime[0]?.length;

  return (
    <>
      <SpiralPrimeForm onSubmit={_setSize} />

      <div
        className={cx(`grid mt-4`, {
          "gap-1 md:gap-2": rowLength < 25,
          "gap-0.5 md:gap-1": rowLength >= 25,
        })}
        style={{
          gridTemplateColumns: `repeat(${Math.max(
            rowLength,
            12
          )}, minmax(0, 1fr))`,
        }}
      >
        {spiralPrime?.map((row: (number | null)[]) =>
          row?.map((col: number | null, i: number) => (
            <ResizableTextBox
              key={i}
              className={cx("bg-blue rounded-md", {
                "col-start-1": i === 0,
                "bg-sky-blue": col === 2,
                "bg-dark-blue": col === 0,
              })}
              style={{ maxWidth: "5rem" }}
            >
              {col === 0 ? "" : col}
            </ResizableTextBox>
          ))
        )}
      </div>
    </>
  );
};

export default SpiralPrime;
