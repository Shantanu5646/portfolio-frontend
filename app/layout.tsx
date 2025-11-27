import "../styles/globals.css";
import Nav from "../src/components/nav";
import { ThemeProvider } from "../src/components/ThemeProvider";
import Footer from "../src/components/Footer";

export const metadata = {
  title: "Shantanu Deshmukh",
  description: "Portfolio - Shantanu Deshmukh",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ThemeProvider>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
