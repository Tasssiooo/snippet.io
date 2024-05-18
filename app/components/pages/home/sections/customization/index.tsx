import { Box, Flex, Heading, Text, Img, useColorMode } from "@chakra-ui/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/carrousel";

import rustcode from "~/assets/images/rustcode.png";
import luacode from "~/assets/images/luacode.png";
import rubycode from "~/assets/images/rubycode.png";

export default function Customization() {
  return (
    <Flex as="section" flexDir="column" justifyContent="center" py="8">
      <Box
        textAlign="center"
        mx={{ md: "auto" }}
        mb={{ base: "8", md: "12" }}
        maxW="3xl"
        px="4"
      >
        <Heading as="h2">Customization</Heading>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim ullam
          consequuntur atque perspiciatis quaerat harum illum dicta voluptas
          nesciunt!
        </Text>
      </Box>
      <Box>
        <Carousel
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="full"
          maxW="5xl"
          mx="auto"
        >
          <CarouselContent>
            <CarouselItem>
              <Box as="figure">
                <Img
                  src={rustcode}
                  htmlWidth={1024}
                  htmlHeight={392}
                  rounded="md"
                  alt={`// This program determines if a string is a question 
                fn is_question(s: &str) -> bool {
                    s.ends_with("?") // Super scientific method, right?
                }
                
                fn main() {
                    let greetings = vec!["Hello!", "Hi there!", "Greetings!"];
                    let random_greeting = greetings.get(rand::random::<usize>() % greetings.len()).unwrap();
                
                    // Accidentally use the question detector for greetings
                    if is_question(random_greeting) {
                        println!("Woah there, slow down with the existential questions! Let's just start with a simple hello!");
                    } else {
                        println!("{}", random_greeting);
                    }
                }
                `}
                />
                <Box
                  as="figcaption"
                  textAlign="center"
                  fontWeight="600"
                  fontSize="lg"
                  mt="4"
                >
                  3024 Night theme
                </Box>
              </Box>
            </CarouselItem>
            <CarouselItem>
              <Box as="figure">
                <Img
                  src={luacode}
                  htmlWidth={1024}
                  htmlHeight={392}
                  alt={`-- This function takes a number and returns a random number between 1 and the given number
                  function randomNumber(n)
                      return math.random(1, n)
                  end
                  
                  -- This function prints a random number between 1 and 10
                  function printRandomNumber()
                      local randomNum = randomNumber(10)
                      print(randomNum)
                  
                      -- Call itself recursively (this is where the funny part happens)
                      printRandomNumber()
                  end
                  
                  -- Start the chain reaction
                  printRandomNumber()
                  `}
                />
                <Box
                  as="figcaption"
                  textAlign="center"
                  fontWeight="600"
                  fontSize="lg"
                  mt="4"
                >
                  Cobalt theme
                </Box>
              </Box>
            </CarouselItem>
            <CarouselItem>
              <Box as="figure">
                <Img
                  src={rubycode}
                  htmlWidth={1024}
                  htmlHeight={392}
                  rounded="md"
                  alt={`# Define a method that redefines itself to say goodbye
                  def say_goodbye
                    define_method :say_goodbye do
                      puts "See ya later, alligator! (This method said goodbye already!)"
                    end
                    puts "Don't make me say goodbye twice... (or maybe I will ;))"
                  end
                  
                  # Call the method
                  say_goodbye
                  `}
                />
                <Box
                  as="figcaption"
                  textAlign="center"
                  fontWeight="600"
                  fontSize="lg"
                  mt="4"
                >
                  VSCode theme
                </Box>
              </Box>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Box>
    </Flex>
  );
}
