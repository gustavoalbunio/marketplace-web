export type TagProps = {
  label: string;
  value: "sold" | "cancelled" | "available" | "other";
};

const styles = {
  available: "bg-blue-dark",
  cancelled: "bg-danger",
  other: "bg-gray-400",
  sold: "bg-success",
} as Record<TagProps["value"], string>;

export function Tag({ label, value }: TagProps) {
  return (
    <span
      className={`text-xs px-2 p-1 rounded-full text-white font-normal ${styles[value]}`}
    >
      {label.toLocaleUpperCase()}
    </span>
  );
}
