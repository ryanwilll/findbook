import cx from "classnames";

type Props = {
  description: string;
  className?: string;
  variant?: "light" | "dark";
  onClick?: (title: any) => void;
};

export function Button({ description, className, variant = "dark", onClick }: Props) {
  return (
    <button
      className={cx([
        "bg-evergreenLight px-6 py-3 rounded-lg shadowfont-medium mt-3 border-2",
        variant === "dark"
          ? "bg-evergreenLight text-white border-transparent"
          : "bg-white border-evergreenLight text-evergreenLight",
        className,
      ])}
      onClick={onClick}>
      {description}
    </button>
  );
}
