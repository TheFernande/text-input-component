import { ITextInputProps } from "@/components/text-input";

type ITextInputVariants = ITextInputProps[];

const textInputVariants: ITextInputVariants = [
  {
    id: "default"
  },
  {
    id: "with-icon",
    withIconLeft: true
  },
  {
    id: "disabled",
    isDisabled: true
  },
  {
    id: "error",
    isValid: false,
    value: "name@email.com"
  }
];

export { textInputVariants };
