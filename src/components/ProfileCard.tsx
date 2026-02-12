import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { motion } from 'motion/react'

const socials = [
  {
    name: 'Github',
    link: 'https://github.com/raicubogdan',
    icon: FaGithubAlt,
    username: 'raicubogdan',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bogdan-raicu-45a393131/',
    icon: FaLinkedinIn,
    username: 'bogdan-raicu',
  },
]

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="border-2 border-second p-6 flex flex-col items-center gap-5 font-lekton"
    >
      {/* Avatar */}
      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-second">
        <img
          src="/avatar-placeholder.svg"
          alt="Bogdan Raicu"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Title */}
      <div className="text-center">
        <h1 className="text-2xl font-varela font-bold text-second">Bogdan Raicu</h1>
        <p className="text-third text-sm tracking-widest mt-1">Frontend Developer</p>
      </div>

      {/* Bio */}
      <p className="text-second text-sm text-center leading-5 font-normal">
        Frontend developer with 3+ years of experience in React and TypeScript.
        Passionate about clean code and great user experiences.
      </p>

      {/* Contact Button */}
      <a
        href="mailto:raicubogdan15@gmail.com"
        className="w-full border-2 border-second text-second text-center py-2 text-sm tracking-widest hover:bg-second hover:text-first transition-colors flex items-center justify-center gap-2"
      >
        <GrMail className="w-4 h-4" />
        CONTACT ME
      </a>

      {/* Social Links */}
      <div className="w-full flex flex-col gap-3 pt-1">
        {socials.map(({ name, link, icon: Icon, username }) => (
          <a
            key={name}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-second text-sm hover:text-fourth transition-colors font-normal"
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span>/{username}</span>
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default ProfileCard
