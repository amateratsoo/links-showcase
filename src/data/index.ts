import htmlIcon from '../assets/rounded-html.svg';
import cssIcon from '../assets/rounded-css.svg';
import tailwindcssIcon from '../assets/rounded-tailwindcss.svg';
import javascriptIcon from '../assets/rounded-javascript.svg';
import typescriptIcon from '../assets/rounded-typescript.svg';
import nodejsIcon from '../assets/nodejs.svg';
import fastifyIcon from '../assets/fastify.svg';
import expressIcon from '../assets/express.svg';
import reactIcon from '../assets/rounded-react.svg';
import nextjsIcon from '../assets/nextjs.svg';
import reactNativeIcon from '../assets/rounded-react.svg';
import mysqlIcon from '../assets/rounded-mysql.svg';
import prismaIcon from '../assets/rounded-prisma.svg';
import planetscaleIcon from '../assets/planetscale.svg';
import gitIcon from '../assets/git.svg';
import githubIcon from '../assets/rounded-github.svg';

interface StackProps {
  name: string;
  icon: string;
}

interface GithubReposProps {
  name: string;
  url: string;
}

const stack: StackProps[] = [
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'TypeScript', icon: typescriptIcon },
  { name: 'React JS', icon: reactIcon },
  { name: 'React Native', icon: reactNativeIcon },
  { name: 'Tailwindcss', icon: tailwindcssIcon },
  { name: 'Github', icon: githubIcon },
  { name: 'Prisma ORM', icon: prismaIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Express JS', icon: expressIcon },
  { name: 'Node JS', icon: nodejsIcon },
  { name: 'Fastify JS', icon: fastifyIcon },
  { name: 'Next JS', icon: nextjsIcon },
  { name: 'Planetscale', icon: planetscaleIcon },
  { name: 'Git', icon: gitIcon },
];

const reposBaseURL = 'https://github.com/amateratsoo';

const githubRepos: GithubReposProps[] = [
  { name: 'Solarized', url: 'https://solarized.vercel.app'},
  { name: 'RocketPay', url: 'https://rocketpay-drab.vercel.app' },
  { name: 'TioFelix', url: 'https://tiofelix.vercel.app' },
  { name: 'NLW Setup', url: `${reposBaseURL}/nlw-setup` },
  { name: 'Ataris Clothing', url: `${reposBaseURL}/ataris-clothing` },
];

export { stack, githubRepos };
