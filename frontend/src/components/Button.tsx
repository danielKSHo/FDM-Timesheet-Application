interface Props {
  children: string;
  colour?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  className?: string;
  onClick: () => void;
}

const Button = ({
  children,
  colour = "primary",
  className,
  onClick,
}: Props) => {
  return (
    <button className={`btn btn-${colour} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
