import { SyntheticEvent, ReactNode } from "react";
import { IFormErrorValidator } from "./validator";

export interface IField {
  value: any;
  isInvalid: boolean;
  isTouched: boolean;
  errorMessage: string;
}

export const defaultField: IField = {
  value: undefined,
  isInvalid: false,
  isTouched: false,
  errorMessage: "",
};

export enum EFormFieldPattern {
  NUMBER = "number",
}

export type TFormField = {
  id?: string;
  name: string;
  label: string;
  ariaLabel?: string;
  defaultValue?: any;
  validate?: IFormErrorValidator;

  value?: any;
  pattern: EFormFieldPattern;
  isInvalid?: boolean;
  errorMessage?: string;
  onChange?: (e: SyntheticEvent) => void;

  children?: ReactNode;
};
