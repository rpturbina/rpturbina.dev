import Header from '@components/Header';
import Footer from '@components/Footer';
import Head from 'next/head';

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>rpturbina | Personal Website by Rizki Pratama Turbina</title>
        <meta
          name="description"
          content="Hello World👋! I'm Rizki Pratama Turbina. Frontend Web Enthusiast | Bring my frontend experiences to solve your problems."
        />
        <meta
          name="google-site-verification"
          content="iYaPdXA7jK6VjMnUKSWUKAu00-O4MJj6eFc7UlD-d34"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rpturbina.me/" />
        <meta
          property="og:title"
          content="rpturbina | Personal Website by Rizki Pratama Turbina"
        />
        <meta
          property="og:description"
          content="Hello World👋! I'm Rizki Pratama Turbina. Frontend Web Enthusiast | Bring my frontend experiences to solve your problems."
        />
        <meta property="og:image" content="/images/web-thumbnail.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rpturbina.me/" />
        <meta
          property="twitter:title"
          content="rpturbina | Personal Website by Rizki Pratama Turbina"
        />
        <meta
          property="twitter:description"
          content="Hello World👋! I'm Rizki Pratama Turbina. Frontend Web Enthusiast | Bring my frontend experiences to solve your problems."
        />
        <meta
          property="twitter:image"
          content="https://rpturbina.me/src/images/meta-tags-rpturbina.me.png"
        />
        <meta
          name="keywords"
          content="Personal Website by Rizki Pratama Turbina, rpturbina personal website"
        />
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl">{children}</main>
      <Footer />
    </>
  );
};
export default DefaultLayout;
