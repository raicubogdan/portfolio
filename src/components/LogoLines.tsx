import { animate, motion, stagger } from 'framer-motion'

const LogoLines = () => {
  const animation = {
    animate: { x: [-6500, 500, 500, 0], scaleX: [10, 10, 10, 1] },
    transition: {
      type: 'tween',
      ease: 'linear',
      delay: 0.2,
      duration: 1,
      times: [0, 0.3, 0.4],
    },
  }

  return (
    <div className="flex flex-col w-[100vmin] gap-4">
      <motion.div className="self-end" {...animation}>
        <div className="w-[60vmin] h-[2px] bg-second"></div>
      </motion.div>

      <motion.div
        className="self-center"
        animate={{ x: [-6500, 500, 500, 0], scaleX: [10, 10, 10, 1] }}
        transition={{
          ease: 'linear',
          delay: 0.2,
          duration: 1,
          times: [0, 0.3, 0.4],
        }}
      >
        <div className="w-[60vmin] h-[2px] bg-second"></div>
      </motion.div>

      <motion.div
        animate={{ x: [-6500, 500, 500, 0], scaleX: [10, 10, 10, 1] }}
        transition={{
          ease: 'linear',
          delay: 0.2,
          duration: 1,
          times: [0, 0.3, 0.4],
        }}
      >
        <div className="w-[60vmin] h-[2px] bg-second"></div>
      </motion.div>
    </div>
  )
}

export default LogoLines
