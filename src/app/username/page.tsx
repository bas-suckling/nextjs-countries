"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Heading, Stack } from "@chakra-ui/react";

export default function Countries() {
  useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  return (
    <Stack>
      <Heading>Add your Username</Heading>
    </Stack>
  );
}
