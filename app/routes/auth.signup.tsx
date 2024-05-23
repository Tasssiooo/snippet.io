import {
  CardBody,
  Button,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SignCard from "~/components/pages/auth/components/sign-card";
import SignCardHeader from "~/components/pages/auth/components/sign-card-header";
import SignInput from "~/components/pages/auth/components/sign-input";
import SignCardDivider from "~/components/pages/auth/components/sign-card-divider";
import SignCardFooter from "~/components/pages/auth/components/sign-card-footer";

const formSchema = z
  .object({
    email: z
      .string()
      .email({ message: "It must be a valid email!" })
      .min(11)
      .max(50),
  })
  .required();

export default function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <SignCard>
        <SignCardHeader
          heading="Create an account"
          body="Start making your snippets"
        />
        <CardBody>
          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            color="blackAlpha.800"
          >
            <FormControl isInvalid={errors.email ? true : false}>
              <FormLabel
                htmlFor="email"
                fontWeight="600"
                color="blackAlpha.650"
                mb="0"
              >
                Email
              </FormLabel>
              <Input
                id="email"
                type="email"
                autoFocus
                placeholder="Enter your email"
                {...register("email")}
                bgColor="blackAlpha.200"
                _placeholder={{ color: "blackAlpha.600" }}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <Button
              mt="7"
              w="full"
              isLoading={isSubmitting}
              type="submit"
            >
              Continue
            </Button>
          </Box>
        </CardBody>
        <SignCardDivider content="or sign up with" />
        <SignCardFooter type="signup" />
      </SignCard>
    </>
  );
}
