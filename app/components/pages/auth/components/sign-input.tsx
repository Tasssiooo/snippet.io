import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { HTMLInputTypeAttribute } from "react";

interface Props {
  id: string;
  isInvalid: boolean;
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  register: any;
  errorMessage: string | undefined;
}

export default function SignInput({
  id,
  isInvalid,
  label,
  type,
  name,
  placeholder,
  register,
  errorMessage,
}: Props) {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={id} fontWeight="600" color="blackAlpha.650" mb="0">
        {label}
      </FormLabel>
      <Input
        id={id}
        type={type}
        autoFocus={id === "email"}
        placeholder={placeholder}
        {...register(name)}
        bgColor="blackAlpha.200"
        _placeholder={{ color: "blackAlpha.600" }}
      />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
}
