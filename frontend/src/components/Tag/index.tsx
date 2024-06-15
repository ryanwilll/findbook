import { useCallback } from "react";
import cx from "classnames";

type Props = {
  title: string;
  className?: string;
};

export function Tag({ title, className }: Props) {
  const randomColors = useCallback(() => {
    const hue = Math.floor(Math.random() * 360);
    const lightness = `hsl(${hue}, 100%, 95%)`;
    const darkness = `hsl(${hue}, 100%, 20%)`;

    return { lightness, darkness };
  }, [title]);

  return (
    <p
      style={{ backgroundColor: randomColors().lightness, color: randomColors().darkness }}
      className={cx(["rounded-full  opacity-75 text-center w-fit px-3", className])}>
      {title}
    </p>
  );
}
