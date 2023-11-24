import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ramil Portfolio" />
        <meta property="og:title" content="Ramil Portfolio" />
        <meta property="og:description" content="Ramil Portfolio" />
        <meta property="og:image" content="/static/images/logo.png" />
        <link rel="icon" href="/static/images/logo.png" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
