import { FaKeyboard, FaServer, FaRobot } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className="border-2 border-second min-h-screen w-full flex flex-col items-center p-4 gap-4 font-lekton">
      <p
        className="text-[8vmin] mt-4  text-second"
        style={{
          fontWeight: 800,
        }}
      >
        my experience
      </p>

      <div className="border-2 border-second flex flex-col w-full h-fit p-6 gap-8 font-normal">
        <div className="flex gap-4">
          <FaKeyboard size="15vmin" color="#f3de8a" className="w-[40%]" />
          <p className="mt-1 text-xl tracking-widest leading-5">frontend development</p>
        </div>

        <p className="leading-5 border-l-2 pl-2 border-second">
          Experienced in Typescript, React and various css libraries such as TailwindCSS
          and ChakraUI
        </p>
      </div>

      <div className="border-2 border-second flex flex-col w-full h-fit p-6 gap-4 font-normal">
        <div className="flex gap-4">
          <FaServer size="15vmin" color="#f3de8a" className="w-[40%]" />
          <p className="mt-1 text-xl tracking-widest leading-5">db's & backend dev</p>
        </div>

        <p className="leading-5 border-l-2 pl-2 border-second">
          Worked with Postgresql, Firebase Firestore, Prisma, tRPC. Familiar with NodeJS
          and Express
        </p>
      </div>

      <div className="border-2 border-second flex flex-col w-full h-fit p-6 gap-4 font-normal">
        <div className="flex gap-4">
          <FaRobot size="15vmin" width="30px" color="#f3de8a" className="w-[40%]" />
          <p className="mt-1 text-xl tracking-widest leading-5">exploring the AI space</p>
        </div>

        <p className="leading-5 border-l-2 pl-2 border-second">
          Interested in the developemnt of AI technologies. User of GPT-4 and Github
          Copilot. Exploring langchain and OpenAI's API
        </p>
      </div>
    </div>
  )
}

export default Experience
