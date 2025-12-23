import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "OneRust.io",
  description: "Rust server control panel"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
