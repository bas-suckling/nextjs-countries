"use client";

import { Container, Heading, Stack } from "@chakra-ui/react";
import { UpdateUserData } from "../components/updateUserData";

export default function Username() {
  return (
    <Container maxW="md">
      <Stack>
        <Heading>Update your Username</Heading>
        <UpdateUserData displayName="Username" routeName="username" />
      </Stack>
    </Container>
  );
}
