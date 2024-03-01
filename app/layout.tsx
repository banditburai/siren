import "./global.css";
import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans"
import { SandpackCSS } from "./blog/[slug]/sandpack";
import { ThemeProvider } from "./components/theme-provider";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";




export const metadata: Metadata = {
  metadataBase: new URL("https://promptcel.com"),
  title: {
    default: "Promptcel",
    template: "%s | Promptcel",
  },
  description: "Prompt by example.",
  openGraph: {
    title: "Promptcel",
    description: "Prompt by example.",
    url: "https://promptcel.com",
    siteName: "Promptcel",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Promptcel",
    card: "summary_large_image",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      
    >
    
      <head>
        <SandpackCSS />
      </head>
      <body className='antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <ThemeProvider attribute="class" defaultTheme="dark">
        <main className={cx(
          'flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0',
          GeistSans.variable,
          GeistMono.variable
        )}>         
          <Navbar />
        {children}
        <Analytics />
          <SpeedInsights />
      </main>
    </ThemeProvider>
      </body>
    </html>
  );
}
