import Head from "next/head";
import DefaultLayout from "@components/DefaultLayout";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <article id="home" className="hero m-auto min-h-screen max-w-7xl px-4">
          <Image
            src="/images/author-photo-hero.webp"
            alt="rpturbina photo"
            className="mb-8 w-64 rounded-full"
            height={256}
            width={256}
          />
          <h2 className="text-2xl font-semibold md:text-3xl">
            &#60; Hello World👋! &#47;&#62;
          </h2>
          <h3 className="text-center text-2xl font-bold sm:text-3xl">
            I&apos;m R. Pratama Turbina
          </h3>
          <p className="text-center">
            <strong>Frontend Web Enthusiast</strong> | Bring my frontend
            experiences to solve your problems
          </p>
        </article>
      </DefaultLayout>
    </>
  );
}
