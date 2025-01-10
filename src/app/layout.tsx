import { Cinzel, Quicksand } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";

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
      <Head>
        {/* General Metadata */ }
        <title>EverQuill | The Pen of Creation, The Forge of Legends</title>
        <meta name="description" content="EverQuill is your go-to platform for tabletop RPG resources, tools, and modules, empowering creators and adventurers alike." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="tabletop RPG, EverQuill, Dungeons & Dragons, TTRPG resources, solo adventures, RPG tools" />
        <meta name="author" content="Yuriy Zhvirblis" />
        <meta name="theme-color" content="#161e2e" />

        {/* Open Graph Metadata */ }
        <meta property="og:title" content="EverQuill | The Pen of Creation, The Forge of Legends" />
        <meta property="og:description" content="Join a vibrant community of RPG enthusiasts and access top-notch resources to craft your next adventure." />
        <meta property="og:image" content="/Images/social-preview.png" />
        <meta property="og:url" content="https://everquill.games" />
        <meta property="og:type" content="website" />

        {/* Twitter Metadata */ }
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EverQuill | The Pen of Creation, The Forge of Legends" />
        <meta name="twitter:description" content="Tabletop RPG tools, resources, and community for creators and adventurers." />
        <meta name="twitter:image" content="/Images/twitter-card.png" />

        {/* Icons */ }
        <link rel="icon" href="/Icons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/Icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" href="/Icons/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" href="/Icons/favicon-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/Icons/favicon-192x192.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Google Analytics Script */ }
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-DPQ4G178QB"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        { `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DPQ4G178QB');
        `}
      </Script>

      <body
        className={ `${cinzel.variable} ${quicksand.variable} antialiased` }
      >
        <Header />
        <main>{ children }</main>
        <Footer />
      </body>
    </html>
  );
}
