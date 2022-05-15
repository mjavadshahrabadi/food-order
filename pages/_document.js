import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa-IR" dir="rtl">
      <Head>
        {/* fav-icon */}
        <link
          rel="icon"
          type="image/png"
          href="/icons/fav-icon/food-icon.png"
        />
        {/* font */}
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link href="https://v1.fontapi.ir/css/Vazir" rel="stylesheet" />
      </Head>
      <body>
        <div id="backdrop" />
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
