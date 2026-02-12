import { motion } from 'motion/react'

const skills = [
  'TypeScript',
  'JavaScript',
  'React',
  'Node.js',
  'Express',
  'TailwindCSS',
  'ChakraUI',
  'Prisma',
  'PostgreSQL',
  'Firebase',
  'Python',
  'Django',
  'tRPC',
  'Git',
  'HTML',
  'CSS',
  'Storybook',
  'Figma',
  'AdobeXD',
  'oAuth',
]

const SkillsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="border-2 border-second p-6 font-lekton"
    >
      <h2 className="text-lg font-bold text-second mb-4 tracking-widest">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-second text-second text-xs px-3 py-1 tracking-wider hover:bg-second hover:text-first transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default SkillsCard
