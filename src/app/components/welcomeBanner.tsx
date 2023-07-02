"use client";
import { Center, Heading, Stack } from "@chakra-ui/react";
import { Profile } from "./profile";

export const WelcomeBanner = () => {
  return (
    <Stack>
      <Center>
        <Heading pt={"100px"} size={"4xl"}>
          Welcome to my demo Next.js app
        </Heading>
      </Center>
      <Profile />
    </Stack>
  );
};
