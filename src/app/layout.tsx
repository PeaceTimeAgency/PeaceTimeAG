import "./globals.css";
import { NextSeo } from "next-seo";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Peace Time Agency",
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "A calm, creator‑first agency that takes the stress out of streaming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-calm">
      <head>
        {/* SEO defaults – override per page if needed */}
        <NextSeo
          title={metadata.title}
          description={metadata.description}
          openGraph={{
            title: metadata.title,
            description: metadata.description,
            images: [
              {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Peace Time Agency",
              },
            ],
          }}
        />
      </head>
      <body className="text-gray-900 antialiased">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
