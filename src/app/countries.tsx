"use client";

export const dynamic = "force-dynamic";

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Text } from "@chakra-ui/react";

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

export default function PollPage() {
  const { data }: any = useSuspenseQuery(query);
  console.log(data);

  return (
    <Text fontSize={32} textAlign={["center"]}>
      The api returned data about {data.countries.length} countries
    </Text>
  );
}
