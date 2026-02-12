import { motion } from 'motion/react'

const AboutCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="border-2 border-second p-6 font-lekton"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-second tracking-widest">About Me</h2>
        <p className="font-varela text-second text-3xl tracking-wider">hello!</p>
      </div>
      <p className="text-second text-lg leading-8 font-normal">
        I am a frontend developer with experience in TypeScript, React, and various CSS
        libraries such as TailwindCSS and ChakraUI. I also have backend experience working
        with Node, Prisma, PostgreSQL, Firebase Firestore, Python, and Django. Interested in
        the development of AI technologies — user of GPT-4 and Github Copilot, exploring
        LangChain and OpenAI's API.
      </p>
    </motion.div>
  )
}

export default AboutCard
