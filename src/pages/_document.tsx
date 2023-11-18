import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta
          name="description"
          content="Pluga's challenge"
        />
        <meta name="author" content="Francielle Dellamora" />
      </Head>
      <body>
        <div id="modal-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}