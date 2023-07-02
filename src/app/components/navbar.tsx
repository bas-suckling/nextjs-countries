"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { LoginLink, LogoutLink } from "./links";

interface NavbarProps {
  isLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  return (
    <Box p={4}>
      {props.isLoggedIn ? (
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/username">Username</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/jobtitle">Job Title</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/countries">Countries</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <LogoutLink />
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <LoginLink />
      )}
    </Box>
  );
};
