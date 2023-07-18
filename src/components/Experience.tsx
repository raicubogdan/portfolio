import {
  FaServer,
  FaReact,
  FaRobot,
  FaNodeJs,
  FaGithubAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'
import {
  SiTypescript,
  SiJavascript,
  SiPrisma,
  SiDjango,
  SiTrpc,
  SiChakraui,
  SiStorybook,
  SiExpress,
  SiAdobexd,
} from 'react-icons/si'
import {
  BiLogoTailwindCss,
  BiLogoPostgresql,
  BiLogoFigma,
  BiLogoFirebase,
} from 'react-icons/bi'
import { TbBrandOauth } from 'react-icons/tb'

const Experience = () => {
  return (
    <div className=" w-full p-4 px-6 gap-4 font-lekton">
      <div className="max-w-[1200px] border-y-2 lg:border-2 border-second flex flex-col items-center mx-auto gap-10 pt-10 pb-10 p-0 lg:p-6">
        <p
          className="text-[8vmin] text-second"
          style={{
            fontWeight: 800,
          }}
        >
          my experience
        </p>

        <div className="flex flex-col gap-4 lg:flex-row h-fit">
          <div className="border-2 border-second flex flex-col w-full p-6 gap-4 font-normal">
            <div className="flex gap-4">
              <MdDesignServices className="text-second w-[3rem] h-[3rem]" />
              <p className="mt-1 text-xl tracking-widest leading-5">
                <span className="font-bold underline">3+ years</span> frontend dev
              </p>
            </div>

            <p className="leading-5 border-l-2 pl-2 border-second">
              Experience in Typescript, React and various css libraries such as
              TailwindCSS and ChakraUI
            </p>
          </div>

          <div className="border-2 border-second flex flex-col w-full p-6 gap-4 font-normal">
            <div className="flex gap-4">
              <FaServer className="w-[3rem] h-[3rem] color-second" />
              <div className="mt-1 text-xl tracking-widest leading-5">
                <span className="font-bold underline"> 2 years</span>
                <p> backend dev</p>
              </div>
            </div>

            <p className="leading-5 border-l-2 pl-2 border-second">
              Worked with Node, Prisma, Postgresql, Firebase Firestore, Python, Django.
            </p>
          </div>

          <div className="border-2 border-second flex flex-col w-full  p-6 gap-4 font-normal">
            <div className="flex gap-4">
              <FaRobot className="text-second w-[3rem] h-[3rem]" />
              <p className="mt-1 text-xl tracking-widest leading-5">observing AI</p>
            </div>

            <p className="leading-5 border-l-2 pl-2 border-second">
              Interested in the developemnt of AI technologies. User of GPT-4 and Github
              Copilot. Exploring langchain and OpenAI's API
            </p>
          </div>
        </div>

        <TechIcons />
      </div>
    </div>
  )
}

const icons = [
  { Icon: FaReact, title: 'React', link: 'https://react.dev/' },
  { Icon: SiJavascript, title: 'Javascript', link: 'https://www.javascript.com/' },
  { Icon: SiTypescript, title: 'Typescript', link: 'https://www.typescriptlang.org/' },
  { Icon: FaNodeJs, title: 'Node', link: 'https://nodejs.org/en' },
  { Icon: SiExpress, title: 'Express', link: 'https://expressjs.com/' },
  { Icon: BiLogoFirebase, title: 'Firebase', link: 'https://firebase.google.com/' },
  { Icon: FaGitAlt, title: 'Git', link: 'https://git-scm.com/' },
  { Icon: FaGithubAlt, title: 'Github', link: 'https://github.com/' },
  { Icon: BiLogoTailwindCss, title: 'Tailwind', link: 'https://tailwindcss.com/' },
  { Icon: SiChakraui, title: 'ChakraUI', link: 'https://chakra-ui.com/' },
  { Icon: FaHtml5, title: 'Html', link: 'https://www.w3schools.com/html/' },
  { Icon: FaCss3Alt, title: 'Css', link: 'https://www.w3schools.com/css/' },
  { Icon: SiPrisma, title: 'Prisma', link: 'https://www.prisma.io/' },
  { Icon: BiLogoPostgresql, title: 'PostgreSQL', link: 'https://www.postgresql.org/' },
  { Icon: TbBrandOauth, title: 'oAuth', link: 'https://oauth.net/' },
  { Icon: FaPython, title: 'Ptyhon', link: 'https://www.python.org/' },
  { Icon: SiDjango, title: 'Django', link: 'https://www.djangoproject.com/' },
  { Icon: SiTrpc, title: 'tRPC', link: 'https://trpc.io/' },
  { Icon: SiStorybook, title: 'Storybook', link: 'https://storybook.js.org/' },
  { Icon: BiLogoFigma, title: 'Figma', link: 'https://www.figma.com/' },
  { Icon: SiAdobexd, title: 'AdobeXD', link: 'https://adobexdplatform.com/' },
]

const TechIcons = () => {
  return (
    <div className="mt-0 lg:mt-16 flex flex-col gap-14 items-center pb-0 lg:pb-10">
      <p className="text-3xl lg:text-6xl">technologies</p>

      <div className="flex flex-wrap gap-10 max-w-[800px] justify-around">
        {icons.map(({ Icon, link, title }) => (
          <a href={link} target="_blank" title={title}>
            <Icon className="w-[3rem] h-[3rem]" />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Experience
