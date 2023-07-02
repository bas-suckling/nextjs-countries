import { LoginButton, LogoutButton } from "./components/buttons.component";

import { __DEV__ } from "@apollo/client/utilities/globals";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>{session ? <LogoutButton /> : <LoginButton />}</div>
    </main>
  );
}
