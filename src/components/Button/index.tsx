import {
  Button as ButtonShadcn,
  ButtonProps as ButtonPropsShadcn,
} from "../ui/button";

type ButtonProps = ButtonPropsShadcn & {};

export function Button({ ...rest }: ButtonProps) {
  return <ButtonShadcn {...rest} />;
}
