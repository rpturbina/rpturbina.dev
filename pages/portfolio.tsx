import ProjectList from '@/components/ProjectList'
import Head from 'next/head'

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="m-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-12 pt-24"
    >
      <Head>
        <title>Portfolio | rpturbina</title>
        <link rel="canonical" href="https://rpturbina.vercel.app/portfolio" />
      </Head>
      <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
        &#60; Things I&apos;ve built &#47;&#62;
      </h2>
      <ProjectList />
    </section>
  )
}

export default Portfolio
