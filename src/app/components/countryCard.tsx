"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Country } from "../types";

export const dynamic = "force-dynamic";

export default function CountryCard(props: { country: Country }) {
  const { country } = props;
  return (
    <Card
      p={4}
      bg={"#0093E9"}
      bgImage={"linear-gradient(160deg,#0093E9 0%, #80D0C7 100%);"}
    >
      <CardHeader>
        <Heading size="sm">
          {country.name} {country.emoji}
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Capital
            </Heading>
            <Text pt="2" fontSize="sm">
              {country.capital ?? "South Pole"}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Currency
            </Heading>
            <Text pt="2" fontSize="sm">
              {country.currency ?? "Penguin Dollars"}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
