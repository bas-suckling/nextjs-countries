"use client";
import { Link } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";

export const LoginLink = () => {
  return <Link onClick={() => signIn()}>Sign in</Link>;
};

export const LogoutLink = () => {
  return <Link onClick={() => signOut()}>Sign Out</Link>;
};

export const HomeLink = () => {
  return <Link href="/">Home</Link>;
};

export const CountriesLink = () => {
  return <Link href="/countries">Countries</Link>;
};

export const UsernameLink = () => {
  return <Link href="/username">Username</Link>;
};

export const JobTitleLink = () => {
  return <Link href="/jobtitle">Job Title</Link>;
};
