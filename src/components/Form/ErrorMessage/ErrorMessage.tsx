import { ReactNode } from "react";

const ErrorMessage: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <span className="text-error text-xs">{children || "\u00A0"}</span>;
};

export default ErrorMessage;
