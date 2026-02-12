import { motion } from 'motion/react'
import {
  FaReact,
  FaNodeJs,
  FaGithubAlt,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa'
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
  { Icon: FaPython, title: 'Python', link: 'https://www.python.org/' },
  { Icon: SiDjango, title: 'Django', link: 'https://www.djangoproject.com/' },
  { Icon: SiTrpc, title: 'tRPC', link: 'https://trpc.io/' },
  { Icon: SiStorybook, title: 'Storybook', link: 'https://storybook.js.org/' },
  { Icon: BiLogoFigma, title: 'Figma', link: 'https://www.figma.com/' },
  { Icon: SiAdobexd, title: 'AdobeXD', link: 'https://adobexdplatform.com/' },
]

const TechGrid = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="border-2 border-second p-6 font-lekton"
    >
      <h2 className="text-3xl font-bold text-second tracking-widest mb-6">Technologies</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
        {icons.map(({ Icon, link, title }) => (
          <a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="group flex flex-col items-center gap-2"
          >
            <Icon className="w-12 h-12 text-second group-hover:text-fourth transition-colors" />
            <span className="text-sm text-third group-hover:text-second transition-colors text-center leading-tight">
              {title}
            </span>
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default TechGrid
