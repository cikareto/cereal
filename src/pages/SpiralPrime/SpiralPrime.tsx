import { useMemo, useState } from "react";
import ResizableBox from "../../components/Box/ResizableBox";
import { getSpiralPrime } from "../../features/spiralPrime";
import SpiralPrimeForm from "./SpiralPrimeForm";

const SpiralPrime = () => {
  const [_size, _setSize] = useState<number>(0);

  const spiralPrime = useMemo(() => getSpiralPrime(_size), [_size]);

  const onHandleSubmit = (value: number) => {
    _setSize(value);
  };

  return (
    <>
      <SpiralPrimeForm onSubmit={onHandleSubmit} />

      <div
        className={`grid gap-2 mt-4`}
        style={{
          gridTemplateColumns: `repeat(${spiralPrime[0]?.length}, minmax(0, 1fr))`,
        }}
      >
        {spiralPrime.map((row: [number]) => {
          return (
            <>
              {row.map((col: number) => (
                <ResizableBox
                  className="bg-blue rounded-md"
                  style={{ maxWidth: "5rem" }}
                >
                  {col}
                </ResizableBox>
              ))}
            </>
          );
        })}
      </div>
    </>
  );
};

export default SpiralPrime;
