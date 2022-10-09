import { GithubIcon } from "../../../assets/SVGs";

const GithubLink: React.FC<{ className?: string; width?: number }> = ({
  className,
  width = 18,
}) => (
  <a
    className={className}
    href="https://github.com/sgennrw"
    target="_blank"
    rel="noreferrer"
  >
    <GithubIcon className="hover:fill-txt-note" width={width} height={width} />
  </a>
);

export default GithubLink;
