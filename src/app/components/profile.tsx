"use client";
import { Box, Center, Heading, Stack } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const userId = "9828eb4a-b014-482f-8df1-60f9d45b35d6";

  useEffect(() => {
    const getProfileData = async () => {
      const query = await fetch(`/api/user/${userId}`);
      const response = await query.json();
      console.log(response);
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
