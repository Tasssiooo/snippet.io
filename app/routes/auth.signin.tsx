import {
  CardBody,
  Button,
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  VisuallyHidden,
} from "@chakra-ui/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useState } from "react";

import { Icon } from "@iconify-icon/react";

import SignCard from "~/components/pages/auth/components/sign-card";
import SignCardHeader from "~/components/pages/auth/components/sign-card-header";
import SignCardDivider from "~/components/pages/auth/components/sign-card-divider";
import SignCardFooter from "~/components/pages/auth/components/sign-card-footer";

const formSchema = z
  .object({
    email: z
      .string()
      .email({ message: "It must be a valid email!" })
      .min(11)
      .max(50),
    password: z
      .string()
      .min(1, "Password is required!")
      .min(8, "Password must have more than 8 characters!"),
  })
  .required();

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [show, setShow] = useState(false);
  const handleShowPassword = () => setShow(!show);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <SignCard>
        <SignCardHeader
          heading="Sign in to your account"
          body="Start making your snippets"
        />
        <CardBody>
          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            color="blackAlpha.800"
          >
            <Stack direction="column" spacing="4">
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
              <FormControl isInvalid={errors.password ? true : false}>
                <FormLabel
                  htmlFor="password"
                  fontWeight="600"
                  color="blackAlpha.650"
                  mb="0"
                >
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    type={show ? "text" : "password"}
                    placeholder="Enter your password"
                    {...register("password")}
                    bgColor="blackAlpha.200"
                    _placeholder={{ color: "blackAlpha.600" }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                      <Icon
                        icon={show ? "mdi:show" : "mdi:hide"}
                        width={24}
                        height={24}
                      />
                      <VisuallyHidden>{show ? "Hide" : "Show"}</VisuallyHidden>
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
            </Stack>
            <Button mt="7" w="full" isLoading={isSubmitting} type="submit">
              Continue
            </Button>
          </Box>
        </CardBody>
        <SignCardDivider content="or sign in with" />
        <SignCardFooter type="signin" />
      </SignCard>
    </>
  );
}
