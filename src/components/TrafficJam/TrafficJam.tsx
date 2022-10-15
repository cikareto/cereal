import Signal from "./Signal";

interface ITrafficJam {
  disabled: boolean;
  /** @param timer time in ms */
  timer: number;
}

const TrafficJam: React.FC<ITrafficJam> = ({ disabled, timer }) => {
  return (
    <div className="flex items-center gap-1 h-full bg-[#191F2D] rounded-lg px-3">
      <Signal color="red" disabled={timer <= 2000} />
      <Signal color="yellow" disabled={timer > 2000 || timer === 0} />
      <Signal color="green" disabled={disabled || timer > 0} />
    </div>
  );
};

export default TrafficJam;
