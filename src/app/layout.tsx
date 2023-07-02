import { Providers } from "./providers";
import { ApolloWrapper } from "./lib/apollo-wrapper";
import { Navbar } from "./components/navbar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ApolloWrapper>
            <Navbar />
            {children}
          </ApolloWrapper>
        </Providers>
      </body>
    </html>
  );
}
