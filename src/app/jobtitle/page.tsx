"use client";

import { Heading, Stack, Container } from "@chakra-ui/react";
import { UpdateUserData } from "../components/updateUserData";

export default function JobTitle() {
  return (
    <Container maxW="md">
      <Stack gap={4}>
        <Heading>Update your Job Title</Heading>
        <UpdateUserData displayName="Job Title" routeName="jobtitle" />
      </Stack>
    </Container>
  );
}
