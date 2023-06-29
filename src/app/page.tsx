"use client";

import Countries from "./countries";
import styles from "./page.module.css";
import { Heading, Box } from "@chakra-ui/react";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { __DEV__ } from "@apollo/client/utilities/globals";

if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Box w="100%" pt={10}>
        <Heading fontSize={32} textAlign={["center"]}>
          Countries of the world
        </Heading>
      </Box>
      <Box p={10}>
        <Countries />
      </Box>
    </main>
  );
}
