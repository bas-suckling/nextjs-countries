"use client";

import PollPage from "./countries";
import styles from "./page.module.css";
import { Text } from "@chakra-ui/react";

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
      <Text fontSize={32} textAlign={["center"]}>
        This is a blank next.js project deployed to vercel
      </Text>
      <PollPage />
    </main>
  );
}
