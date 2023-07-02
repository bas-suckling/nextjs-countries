"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { LoginLink, LogoutLink } from "./links";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Box p={4}>
      {session ? (
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
