"use client";
import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export const Profile = () => {
  const session = useSession();

  return (
    <Box p={"10px"}>
      <Center>
        <Stack gap={5}>
          <Heading pl={"100px"} size={"xl"}>
            Username:{session?.data?.user?.username ?? "Not yet set"}
          </Heading>
          <Heading pl={"100px"} size={"xl"}>
            Job Title: {session?.data?.user?.jobtitle ?? "Not yet set"}
          </Heading>
        </Stack>
      </Center>
    </Box>
  );
};
