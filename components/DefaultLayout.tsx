import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'

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
          content="DKjTbreLxLLh2O2bDI2SfcSMnuc9hDUHFAR9jyvwJkE"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rpturbina.vercel.app/" />
        <meta
          property="og:title"
          content="rpturbina | Personal Website by Rizki Pratama Turbina"
        />
        <meta
          property="og:description"
          content="Hello World👋! I'm Rizki Pratama Turbina. Frontend Web Enthusiast | Bring my frontend experiences to solve your problems."
        />
        <meta
          property="og:image"
          content="https://rpturbina.vercel.app/images/web-thumbnail.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rpturbina.vercel.app/" />
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
          content="https://rpturbina.vercel.app/src/images/meta-tags-rpturbina.me.png"
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
  )
}
export default DefaultLayout
