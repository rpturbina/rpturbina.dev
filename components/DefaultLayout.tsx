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
      </Head>
      <Header />
      <main className="mx-auto max-w-5xl">{children}</main>
      <Footer />
    </>
  );
};
export default DefaultLayout;
