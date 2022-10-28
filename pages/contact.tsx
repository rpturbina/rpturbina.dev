import ContactList from '@components/ContactList';
import Head from 'next/head';

const Contacts = () => {
  return (
    <section
      id="contact"
      className="m-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-y-4 px-4"
    >
      <Head>
        <title>Contact | rpturbina</title>
      </Head>
      <h2 className="text-center text-2xl font-bold md:text-3xl">
        &#60; Let&apos;s get connected! &#47;&#62;
      </h2>
      <p className="text-center">
        I&apos;m currently open for any new opportunites. If you have any
        questions or just to say hello, please go ahead!
        <br />I will try my best to reply your message. You can reach me via{' '}
        <a
          href="mailto:rizki.pratama.turbina@gmail.com"
          className="underline transition-colors hover:text-black"
        >
          email
        </a>{' '}
        or via my accounts below.
      </p>
      <ContactList />
    </section>
  );
};
export default Contacts;
