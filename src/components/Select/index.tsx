import { Label } from "@/components/ui/label";

import {
  Select as SelectShadcn,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { twMerge } from "tailwind-merge";

type Option = {
  label: string;
  value: string;
};

interface InputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  containerClassName?: string;
}

export function Select({
  label,
  id,
  placeholder = "Selecione",
  options,
  containerClassName,
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
      <SelectShadcn>
        <SelectTrigger className="bg-inherit h-12">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map(({ label, value }) => (
            <SelectItem value={value}>{label}</SelectItem>
          ))}
        </SelectContent>
      </SelectShadcn>
    </div>
  );
}
