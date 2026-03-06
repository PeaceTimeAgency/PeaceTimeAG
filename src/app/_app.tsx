import "../styles/globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "@/lib/analytics";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: any) {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return (
    <>
      {/* Google Analytics – replace with your GA Measurement ID */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} />
    </>
  );
}
