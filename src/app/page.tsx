import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "./components/buttons.component";
import { User } from "./components/user.component";

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
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>

        <User />
      </div>
    </main>
  );
}
