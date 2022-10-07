import { ReactNode } from "react"

const ErrorMessage: React.FC<{children: ReactNode }> = ({ children }) => {
  return <span className="text-txt-error text-xs">{children}</span>
}

export default ErrorMessage