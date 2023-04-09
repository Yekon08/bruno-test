import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
