import { motion } from 'framer-motion'

const ScrollDownButton = () => {
  const scroll = () => window.scroll({ top: window.innerHeight, behavior: 'smooth' })
  window.scroll(0, 0)

  return (
    <motion.div
      className="flex justify-center h-11 w-[30px] border-4 border-second rounded-xl  justify-self-end p-[2px] pt-2 cursor-pointer"
      onClick={scroll}
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 3,
      }}
    >
      <motion.div
        className="bg-second h-[12px] w-2 rounded-full"
        animate={{ y: [0, 15, 15], opacity: [0, 1, 0] }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          repeat: Infinity,
          delay: 4,
          times: [0, 0.5, 1],
          repeatDelay: 0.5,
        }}
      ></motion.div>
    </motion.div>
  )
}

export default ScrollDownButton
