"use client";

import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { LogoutLink } from "./links";

export const Navbar = () => {
  return (
    <Box p={4}>
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
    </Box>
  );
};
