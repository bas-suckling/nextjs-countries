"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import {
  Box,
  Center,
  CircularProgress,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";
import CountryCard from "../components/countryCard";
import { Country } from "../types";

const query = gql`
  query Countries {
    countries {
      capital
      name
      currency
      emoji
    }
  }
`;

export default function Countries() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const { data }: any = useSuspenseQuery(query);

  if (status === "loading") {
    return (
      <>
        {" "}
        <Center h="50vh">
          <CircularProgress isIndeterminate color="green.300" />
        </Center>
      </>
    );
  }

  return (
    <Stack>
      <Box w="100%" pt={10}>
        <Heading fontSize={32} textAlign={["center"]}>
          Countries of the world
        </Heading>
      </Box>
      <Box p={10}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {data.countries.map((country: Country, i: number) => {
            return (
              <GridItem w="100%" key={i}>
                <CountryCard country={country} />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
}
