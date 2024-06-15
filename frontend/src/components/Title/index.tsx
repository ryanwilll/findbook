import cx from "classnames";

type Props = {
  title: string;
  className?: string;
};

export function Title({ title, className }: Props) {
  return (
    <p className={cx(["md:text-3xl text-xl border-b-4 border-b-evergreenLight w-fit font-bold text-evergreen", className])}>
      {title}
    </p>
  );
}
