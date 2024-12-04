import {
  Avatar as AvatarShadcn,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";

export function Avatar() {
  return (
    <AvatarShadcn className="w-12 h-12 rounded-xl">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarShadcn>
  );
}
