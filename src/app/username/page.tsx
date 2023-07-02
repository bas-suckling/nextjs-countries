"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { Heading, Stack } from "@chakra-ui/react";
import { Navbar } from "../components/navbar";

export default function Countries() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  return (
    <Stack>
      <Navbar isLoggedIn={!!session} />
      <Heading>Add your Username</Heading>
    </Stack>
  );
}
