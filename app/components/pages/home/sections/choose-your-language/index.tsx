import { Box, Button, Flex, Heading, Img, Stack, Text } from "@chakra-ui/react";

import { Icon } from "@iconify-icon/react";

import { useState } from "react";

import cCode from "~/assets/images/solarized-c.png";
import pyCode from "~/assets/images/solarized-python.png";
import luaCode from "~/assets/images/solarized-lua.png";

export default function ChooseYourLanguage() {
  const [code, setCode] = useState({
    c: "linear-gradient(90deg, #659ad3, #03599c)",
    py: "",
    lua: "",
    img: {
      gradient: "linear-gradient(90deg, #659ad3, #03599c)",
      src: cCode,
      alt: `#include <stdio.h>
      #include <time.h>
      
      int main() {
       printf("I'm a very serious program. Watch this:\n");
       srand(time(NULL)); // Seed random number generator (for show)
       printf("Calculating complex algorithms...\n");
       sleep(2); // Simulate processing time
       printf("...and answer is 42!\n");
       return 0;
      }`,
    },
  });

  function handleChangeCode(value: string): void {
    const temp = {
      c: "",
      py: "",
      lua: "",
      img: {
        gradient: "",
        src: "",
        alt: "",
      },
    };

    switch (value) {
      case "c":
        temp.c = "linear-gradient(90deg, #659ad3, #03599c)";
        temp.img.gradient = "linear-gradient(90deg, #659ad3, #03599c)";
        temp.img.src = cCode;
        temp.img.alt = `#include <stdio.h>
        #include <time.h>
        
        int main() {
         printf("I'm a very serious program. Watch this:\n");
         srand(time(NULL)); // Seed random number generator (for show)
         printf("Calculating complex algorithms...\n");
         sleep(2); // Simulate processing time
         printf("...and answer is 42!\n");
         return 0;
        }`;
        break;
      case "py":
        temp.py = "linear-gradient(90deg, #306998, #ffd43b)";
        temp.img.gradient = "linear-gradient(90deg, #306998, #ffd43b)";
        temp.img.src = pyCode;
        temp.img.alt = `import time
        import random
        
        print("I'm a very serious program. Watch this:\n")
        
        # Seed random number generator (for show)
        random.seed(time.time())
        
        print("Calculating complex algorithms...\n")
        time.sleep(2)  # Simulate processing time
        
        print("...and answer is 42!\n")
        `;
        break;
      case "lua":
        temp.lua = "linear-gradient(90deg, #000080, #808080)";
        temp.img.gradient = "linear-gradient(90deg, #000080, #808080)";
        temp.img.src = luaCode;
        temp.img.alt = `-- Print a message
        print("I'm a very serious program. Watch this:\n")
        
        -- Seed random number generator (for show)
        math.randomseed(os.time())
        
        -- Print processing message
        print("Calculating complex algorithms...\n")
        
        -- Simulate processing time
        os.sleep(2)
        
        -- Print the answer
        print("...and answer is 42!\n")
        `;
        break;
    }

    setCode(temp);
  }

  return (
    <Flex
      as="section"
      flexDir="column"
      justifyContent="center"
      py="8"
      px={{ base: "2", xl: "5" }}
    >
      <Box
        textAlign="center"
        mx={{ md: "auto" }}
        mb={{ base: "8", md: "12" }}
        maxW="3xl"
        px="4"
      >
        <Heading as="h2">Choose your language</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ullam
          consequuntur atque perspiciatis quaerat harum illum dicta voluptas
          nesciunt!
        </Text>
      </Box>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        justifyContent="space-around"
        alignItems="center"
        rowGap="8"
        my="8"
      >
        <Stack
          direction={{ base: "row", lg: "column" }}
          spacing={{ base: "14", lg: "0" }}
        >
          <Button
            variant="unstyled"
            pos="relative"
            w={{ base: "64px", lg: "88px" }}
            h={{ base: "64px", lg: "88px" }}
            onClick={() => handleChangeCode("c")}
          >
            <Box
              aria-hidden
              tabIndex={-1}
              pos="absolute"
              bgGradient={code.c}
              w="full"
              h="full"
              rounded="full"
              filter="auto"
              blur="12px"
              zIndex="-1"
            />
            <Box
              as={Icon}
              icon="devicon:c"
              fontSize={{ base: "64px", lg: "88px" }}
            />
            {/* <Icon icon="devicon:c" width={88} height={88} /> */}
          </Button>
          <Button
            variant="unstyled"
            pos="relative"
            w={{ base: "64px", lg: "88px" }}
            h={{ base: "64px", lg: "88px" }}
            left={{ base: "unset", lg: "32" }}
            onClick={() => handleChangeCode("py")}
          >
            <Box
              aria-hidden
              tabIndex={-1}
              pos="absolute"
              bgGradient={code.py}
              w="full"
              h="full"
              rounded="full"
              filter="auto"
              blur="12px"
              zIndex="-1"
            />
            <Box
              as={Icon}
              icon="devicon:python"
              fontSize={{ base: "64px", lg: "88px" }}
            />
            {/* <Icon icon="devicon:python" width={88} height={88} /> */}
          </Button>
          <Button
            variant="unstyled"
            pos="relative"
            w={{ base: "64px", lg: "88px" }}
            h={{ base: "64px", lg: "88px" }}
            onClick={() => handleChangeCode("lua")}
          >
            <Box
              aria-hidden
              tabIndex={-1}
              pos="absolute"
              bgGradient={code.lua}
              w="full"
              h="full"
              rounded="full"
              filter="auto"
              blur="12px"
              zIndex="-1"
            />
            <Box
              as={Icon}
              icon="devicon:lua"
              fontSize={{ base: "64px", lg: "88px" }}
            />
            {/* <Icon icon="devicon:lua" width={88} height={88} /> */}
          </Button>
        </Stack>
        <Box pos="relative">
          <Box
            aria-hidden
            tabIndex={-1}
            pos="absolute"
            bgGradient={code.img.gradient}
            w="full"
            h="full"
            filter="auto"
            blur="12px"
            zIndex="-1"
          />
          <Img
            src={code.img.src}
            w={{ base: "380px", lg: "580px" }}
            htmlWidth={580}
            htmlHeight={280}
            objectFit="contain"
            alt={code.img.alt}
          />
        </Box>
      </Flex>
    </Flex>
  );
}
