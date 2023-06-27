import { Providers } from "./providers";
import { ApolloWrapper } from "./lib/apollo-wrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ApolloWrapper>{children}</ApolloWrapper>
        </Providers>
      </body>
    </html>
  );
}
