import ProjectItem from '@components/ProjectItem';
import { ProjectItemProps } from '@typings/index';

const BASE_DOMAIN = 'rpturbina.github.io';

const projectItems: ProjectItemProps[] = [
  {
    title: 'ThreadNVote Web App',
    description:
      "ThreadNVote is a web-based application that you can create threads, vote and comment other user's threads. I built this project for a course final submission. This app is using Dicoding Forum API as a backend.",
    stack: 'React.js, Tailwind CSS, React Redux',
    demoLink: 'https://thread-n-vote.vercel.app/',
  },
  {
    title: 'Enveir Landing Page',
    description:
      'This is my first freelance project as a Frontend Developer. I built this landing page that belongs to Enveir, an IT Services and IT Consulting Company. I co-worked with other frontend developer to do this project.',
    stack: 'SvelteKit, TypeScript, Tailwind CSS',
    demoLink: 'https://www-enveir.vercel.app/',
  },
  {
    title: 'UrSpotify App (Generasi Gigih 2.0 Final Project)',
    description:
      'UrSpotify is a web-based application that can create playlists for the Spotify app easily. This app consume Spotify Web API.',
    stack: 'React.js, Chakra UI',
    repoLink: 'https://github.com/rpturbina/homework-spotify-app',
    demoLink: `https://urspotify.rpturbina.me/`,
  },
  {
    title: 'Tribute Page - B. J. Habibie',
    description:
      "I built this page for tribute and sharing about B. J. Habibie's life timeline and to complete the freeCodeCamp course about Responsive Web Design.",
    stack: 'HTML, CSS',
    repoLink: 'https://github.com/rpturbina/fcc-tribute-page',
    demoLink: `https://${BASE_DOMAIN}/fcc-tribute-page`,
  },
  {
    title: 'Survey Form - freeCodeCamp',
    description:
      'I built this survey form for completing the freeCodeCamp course about Responsive Web Design.',
    stack: 'HTML, CSS, JavaScript',
    repoLink: 'https://github.com/rpturbina/fcc-survey-form',
    demoLink: `https://${BASE_DOMAIN}/fcc-survey-form`,
  },
  {
    title: 'JavaScript Documentation Page',
    description:
      'I built this technical documentation page for completing the freeCodeCamp course about Responsive Web Design.',
    stack: 'HTML, CSS, JavaScript',
    repoLink: 'https://github.com/rpturbina/fcc-technical-doc/',
    demoLink: `https://${BASE_DOMAIN}/fcc-technical-doc/`,
  },
];

const ProjectList = () => {
  return (
    <ul className="projects md:flex md:flex-wrap md:justify-between md:gap-6">
      {projectItems.map((item) => (
        <ProjectItem
          key={item.title}
          title={item.title}
          description={item.description}
          stack={item.stack}
          repoLink={item.repoLink}
          demoLink={item.demoLink}
        />
      ))}
    </ul>
  );
};
export default ProjectList;
