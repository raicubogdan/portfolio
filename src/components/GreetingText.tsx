import { motion } from 'framer-motion'

const GreetingText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5, delay: 2.5 }}
    >
      <p className="font-varela non-italic text-4xl tracking-wider mt-5">hello!</p>
    </motion.div>
  )
}

export default GreetingText
