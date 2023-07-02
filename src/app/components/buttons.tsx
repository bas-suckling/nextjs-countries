"use client";
import { Button, Link } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return <Button onClick={() => signIn()}>Sign in</Button>;
};

export const LogoutButton = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};

export const CountriesButton = () => {
  return <Link href="/countries">Countries</Link>;
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
