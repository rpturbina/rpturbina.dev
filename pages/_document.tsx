import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="navbar-root"></div>
        <div id="overlay-root"></div>
      </body>
    </Html>
  );
};

export default Document;
