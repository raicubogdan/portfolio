import { motion } from 'motion/react'
import { FaServer, FaRobot } from 'react-icons/fa'
import { MdDesignServices } from 'react-icons/md'

const experiences = [
  {
    icon: MdDesignServices,
    title: '3+ years',
    subtitle: 'frontend dev',
    description:
      'Experience in Typescript, React and various css libraries such as TailwindCSS and ChakraUI',
    accent: 'border-l-fourth',
  },
  {
    icon: FaServer,
    title: '2 years',
    subtitle: 'backend dev',
    description:
      'Worked with Node, Prisma, Postgresql, Firebase Firestore, Python, Django.',
    accent: 'border-l-third',
  },
  {
    icon: FaRobot,
    title: 'observing',
    subtitle: 'AI',
    description:
      "Interested in the development of AI technologies. User of GPT-4 and Github Copilot. Exploring LangChain and OpenAI's API.",
    accent: 'border-l-second',
  },
]

const ExperienceSection = () => {
  return (
    <div className="font-lekton">
      <h2 className="text-3xl font-bold text-second tracking-widest mb-4">Experience</h2>
      <div className="grid grid-cols-1 gap-4">
        {experiences.map(({ icon: Icon, title, subtitle, description, accent }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
            className={`border-2 border-second border-l-4 ${accent} p-6`}
          >
            <div className="flex items-start gap-4">
              <Icon className="text-second w-8 h-8 shrink-0 mt-1" />
              <div>
                <p className="text-second text-2xl tracking-widest leading-7">
                  <span className="font-bold underline">{title}</span> {subtitle}
                </p>
                <p className="text-second text-lg leading-7 mt-3 font-normal">{description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection
