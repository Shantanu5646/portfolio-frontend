import "../styles/globals.css";
import Nav from "../src/components/nav";

export const metadata = {
  title: "Shantanu Deshmukh",
  description: "Portfolio - Shantanu Deshmukh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Nav />
        {/* padding so the content is not hidden under navbar */}
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}
