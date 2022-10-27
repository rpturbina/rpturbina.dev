import DefaultLayout from "@components/DefaultLayout";
import ProjectList from "@components/ProjectList";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <section
        id="portfolio"
        className="m-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-12"
      >
        <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
          &#60; Things I&apos;ve built &#47;&#62;
        </h2>
        <ProjectList />
      </section>
    </DefaultLayout>
  );
};
export default Portfolio;
