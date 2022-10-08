import { CSSProperties, ReactNode } from "react";

const ResizableBox: React.FC<{
  className?: string;
  style?: CSSProperties;
  color?: string;
  children: ReactNode;
}> = ({ className, style, color = "black", children }) => (
  <div className={className} style={style}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 80 80"
      preserveAspectRatio="xMinYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="25"
        fill={color}
      >
        {children}
      </text>
    </svg>
  </div>
);

export default ResizableBox;
