import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { motion } from 'framer-motion'

const SocialMediaMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 1.5, delay: 3 }}
    >
      <div className="hidden lg:block top-20 left-0 fixed">
        <div className="flex flex-col">
          <div className="h-[5vmin] w-[5vmin] bg-second">
            <a href="https://github.com/raicubogdan" target="_blank">
              <FaGithubAlt
                className="h-full w-full text-third pt-[5px]"
                color="#eb9486"
              />
            </a>
          </div>

          <div className="h-[5vmin] w-[5vmin] bg-third">
            <a href="https://www.linkedin.com/in/bogdan-raicu-45a393131/" target="_blank">
              <FaLinkedinIn className="h-full w-full text-second pt-[5px]" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SocialMediaMenu
