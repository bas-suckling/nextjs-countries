"use client";

import { ButtonGroup } from "@chakra-ui/react";
import {
  CountriesLink,
  HomeLink,
  JobTitleLink,
  LoginLink,
  LogoutLink,
  UsernameLink,
} from "./links";

interface NavbarProps {
  isLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <ButtonGroup variant="outline" spacing="6">
      {props.isLoggedIn ? (
        <>
          <HomeLink />
          <UsernameLink />
          <JobTitleLink />
          <CountriesLink />
          <LogoutLink />
        </>
      ) : (
        <LoginLink />
      )}
    </ButtonGroup>
  );
};
