import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Center,
  FormControl,
  Button,
  Input,
  FormHelperText,
  Text,
  Link,
} from "@chakra-ui/react";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [userpass, setUserpass] = useState("");
  const formSubmit = () => {};
  return (
    <Box align="center" w="100%" h="100vh">
      <Flex justifyContent="center" alignItems="center">
        <Center
          boxShadow="dark-lg"
          bg="#DEE3E6"
          borderRadius="10px"
          w="40%"
          h="80vh"
        >
          <Center>
            <Box>
              <FormControl id="email">
                <Input
                  type="email"
                  placeholder="Email"
                  m="5px"
                  bg="white"
                  onChange={(e) => setUsername(console.log(e.target.value))}
                />
                <FormHelperText>We'll never share your email.</FormHelperText>

                <Input
                  type="password"
                  placeholder="password"
                  m="5px"
                  bg="white"
                  onChange={(e) => setUserpass(console.log(e.target.value))}
                />
                <Button colorScheme="teal" type="submit" onClick={formSubmit}>
                  SignUp
                </Button>
              </FormControl>
            </Box>
          </Center>
          <Center>
            <Text color="gray">
              Already have an Account Login <Link>Here</Link>
            </Text>
          </Center>
        </Center>
      </Flex>
    </Box>
  );
};
