import { motion } from 'framer-motion'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

const LeftSideMenu = () => {
  return (
    <motion.div
      className="fixed top-20 left-0"
      // initial={{
      //   opacity: 0,
      // }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        delay: 3,
      }}
    >
      <div className="relative">
        <div className="flex flex-col">
          <div className="h-[5vmin] w-[5vmin] bg-second text-fifth">
            <FaGithubAlt size="5vmin" color="#eb9486" />
          </div>
          <div className="h-[5vmin] w-[5vmin] bg-third">
            <FaLinkedinIn size="5vmin" color="#f3de8a" style={{ paddingTop: '5px' }} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default LeftSideMenu
