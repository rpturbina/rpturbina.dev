import DefaultLayout from '@components/DefaultLayout';
import Image from 'next/image';

const About = () => {
  return (
    <DefaultLayout>
      <section
        id="about"
        className="identity m-auto min-h-screen max-w-7xl px-4"
      >
        <Image
          src="/images/author-photo-hero.webp"
          alt="rpturbina photo"
          className="mb-8 w-64 rounded-full"
          height={512}
          width={512}
        />
        <h2 className="text-2xl font-bold">Rizki Pratama Turbina</h2>
        <p className="text-md font-semibold">Frontend Web Enthusiast</p>
        <p className="opacity-70 transition-all hover:opacity-100">
          <a href="mailto:rizki.pratama.turbina@gmail.com">
            rizki.pratama.turbina@gmail.com
          </a>
        </p>
        <p className="opacity-70 transition-all hover:opacity-100">
          <strong>Location: </strong>
          <a
            href="https://goo.gl/maps/5fRTgKVMSr4UQbWH7"
            target="_blank"
            rel="noreferrer"
          >
            Yogyakarta, Indonesia
          </a>
        </p>
      </section>
    </DefaultLayout>
  );
};
export default About;
