import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { WelcomeBanner } from "./components/welcomeBanner";
import {
  CountriesButton,
  LoginButton,
  LogoutButton,
  ProfileButton,
} from "./components/buttons";

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
        <WelcomeBanner />
        {session ? (
          <>
            <LogoutButton />
            <CountriesButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </main>
  );
}
