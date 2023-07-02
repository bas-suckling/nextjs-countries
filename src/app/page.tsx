import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { WelcomeBanner } from "./components/welcomeBanner";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div>
        <WelcomeBanner />
      </div>
    </main>
  );
}
