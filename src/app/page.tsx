"use client";

import styles from "./page.module.css";
import { Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Text fontSize={32} textAlign={["center"]}>
        This is a blank next.js project deployed to vercel
      </Text>
    </main>
  );
}
