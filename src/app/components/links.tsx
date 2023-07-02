"use client";
import { Link } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";

export const LoginLink = () => {
  return <Link onClick={() => signIn()}>Sign in</Link>;
};

export const LogoutLink = () => {
  return <Link onClick={() => signOut()}>Sign Out</Link>;
};
