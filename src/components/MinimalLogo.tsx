import { motion } from 'motion/react'

const MinimalLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.2 }}
      className="self-center"
    >
      <div className="grid w-[60vmin] h-[60vmin] grid-cols-2 grid-rows-2">
        <motion.div
          className="w-full h-full bg-third"
          animate={{ borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
        />

        <motion.div
          className="w-full h-full bg-fourth"
          animate={{ borderRadius: '50%' }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
        />

        <motion.div
          className="w-full h-full bg-second"
          animate={{ borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }}
          transition={{ ease: 'easeInOut', duration: 0.5, delay: 1.5 }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{ duration: 1.5, delay: 2.2 }}
          className="flex w-full h-1/4 bg-white self-center rotate-45 border-2 border-second"
        >
          <div className="bg-first h-full w-1/5"></div>
          <div className="bg-second h-full w-1/5"></div>
          <div className="bg-third h-full w-1/5"></div>
          <div className="bg-fourth h-full w-1/5"></div>
          <div className="bg-fifth h-full w-1/5"></div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default MinimalLogo
