import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { WelcomeBanner } from "./components/welcomeBanner";
import { Navbar } from "./components/navbar";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div>
        <Navbar isLoggedIn={!!session} />
        <WelcomeBanner />
      </div>
    </main>
  );
}
