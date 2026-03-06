export const pageview = (url: string) => {
  if (typeof window === "undefined") return;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  if (!gaId) return;

  // @ts-ignore – gtag is loaded via the script in _app.tsx (or via <Script>)
  window.gtag("config", gaId, {
    page_path: url,
  });
};
