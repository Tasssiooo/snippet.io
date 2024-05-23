import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";

interface Props {
  content: string;
}

export default function SignCardDivider({ content }: Props) {
  return (
    <Box position="relative" p="4">
      <Divider bgColor="blackAlpha.600" />
      <AbsoluteCenter bg="white" px="2" color="blackAlpha.600" fontSize="sm">
        {content}
      </AbsoluteCenter>
    </Box>
  );
}
