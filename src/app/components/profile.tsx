"use client";
import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { UserInfo } from "../types";

export const Profile = () => {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const userId = session?.user?.id;

  useEffect(() => {
    const getProfileData = async () => {
      const query = await fetch(`/api/user/${userId}`);
      const response = await query.json();
      setUserInfo(response.user);
    };
    getProfileData();
  }, [userId]);

  return (
    <Box p={"10px"}>
      <Center>
        <Stack gap={5}>
          <Heading pl={"100px"} size={"xl"}>
            Username: {userInfo?.username}
          </Heading>
          <Heading pl={"100px"} size={"xl"}>
            Job Title: {userInfo?.jobTitle}
          </Heading>
        </Stack>
      </Center>
    </Box>
  );
};
