import { Cinzel, Quicksand } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={ `${cinzel.variable} ${quicksand.variable} antialiased` }
      >
        <Header />
        <main>{ children }</main>
        {/* Add Footer */ }
        <Footer />
      </body>
    </html>
  );
}
