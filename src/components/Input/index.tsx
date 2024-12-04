import { Label } from "@/components/ui/label";

import {
  Input as InputShadcn,
  InputProps as InputPropsShadcn,
} from "@/components/ui/input";
import { twMerge } from "tailwind-merge";

// import { Mail } from "lucide-react";

type InputProps = InputPropsShadcn & {
  label?: string;
  id?: string;
  containerClassName?: string;
};

export function Input({ label, id, containerClassName, ...rest }: InputProps) {
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
      <InputShadcn className="bg-inherit h-12" id={id} {...rest} />
    </div>
  );
}
