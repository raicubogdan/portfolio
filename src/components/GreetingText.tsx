import { motion } from 'motion/react'

const GreetingText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5, delay: 2.2 }}
    >
      <p className="font-varela text-4xl tracking-wider">hello!</p>
    </motion.div>
  )
}

export default GreetingText
