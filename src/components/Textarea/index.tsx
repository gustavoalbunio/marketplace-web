import { Label } from "@/components/ui/label";

import { Textarea as TextareaShadcn } from "@/components/ui/textarea";
import { twMerge } from "tailwind-merge";

type InputProps = React.ComponentProps<"textarea"> & {
  label?: string;
  id?: string;
  containerClassName?: string;
};

export function Textarea({
  label,
  id,
  containerClassName,
  ...rest
}: InputProps) {
  return (
    <div
      className={twMerge(
        `grid w-full items-center gap-2 ${containerClassName}`
      )}
    >
      {label && (
        <Label htmlFor={id} className="text-gray-300 text-xs uppercase">
          {label}
        </Label>
      )}
      <TextareaShadcn className="bg-inherit h-12" id={id} {...rest} />
    </div>
  );
}
