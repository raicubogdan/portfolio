import { useState } from 'react'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

const SocialMediaMenuMobile = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
    <>
      <div className="fixed flex lg:hidden top-0 w-full justify-between items-center bg-first z-20 border-b-2 border-second px-2">
        <a href="https://github.com/raicubogdan" target="_blank">
          /raicubogdan
        </a>
        {isMenuVisible ? (
          <IoCloseOutline
            className="w-8 h-8 text-second z-20 text-2xl font-bold m-2 rounded-lg right-2 cursor-pointer"
            onClick={() => setIsMenuVisible(false)}
          />
        ) : (
          <RxHamburgerMenu
            className="w-8 h-8 text-second z-20 text-2xl font-bold m-2 rounded-lg right-2 cursor-pointer"
            onClick={() => setIsMenuVisible(true)}
          />
        )}
      </div>

      {isMenuVisible && (
        <div className="fixed h-[100vh] top-0 w-full z-10 backdrop-blur-lg flex flex-col items-center pt-10">
          <a
            className="h-[10vh] w-full bg-second p-4"
            href="https://github.com/raicubogdan"
            target="_blank"
          >
            <FaGithubAlt className="w-full h-full text-fourth" />
          </a>

          <a
            className="h-[10vh] w-full bg-fourth p-4"
            href="https://www.linkedin.com/in/bogdan-raicu-45a393131/"
            target="_blank"
          >
            <FaLinkedinIn
              className="w-full h-full text-second"
              style={{ paddingTop: '5px' }}
            />
          </a>
        </div>
      )}
    </>
  )
}

export default SocialMediaMenuMobile
