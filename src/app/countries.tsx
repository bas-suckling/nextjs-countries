"use client";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Grid, GridItem } from "@chakra-ui/react";
import CountryCard from "./components/countryCard";
import { Country } from "./types";

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
  const { data }: any = useSuspenseQuery(query);

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {data.countries.map((country: Country, i: number) => {
        return (
          <GridItem w="100%" key={i}>
            <CountryCard country={country} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
