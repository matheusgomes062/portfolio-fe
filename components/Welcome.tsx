import { url } from "inspector";
import Image from "next/image";
import Hello from "./Hello";

export default function Welcome() {
  return (
    <section>
      <div className="flex flex-col">
        <Hello/>
        <div className="flex-row mr-12">
          <h1 className='font-bold text-5xl max-w-5xl mb-3'>I&apos;m Matheus Gomes
          </h1>
          <h3 className='text-xl text-gray-600 dark:text-gray-300 mb-6'>I may not be a rocket scientist 🚀,<br/>
          but I can launch your website into orbit 🪐!</h3>
        </div>
        {/* <Image
          className="rounded-lg"
          src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
          alt="Avatar"
          height={150} // Desired size with correct aspect ratio
          width={150} // Desired size with correct aspect ratio
        /> */}
      </div>
      <button
        className="flex items-center justify-center px-10 py-3 font-medium bg-blue-500 dark:bg-blue-500 text-gray-100 rounded-lg shadow-blue-900 shadow-lg active:shadow-none active:scale-95 hover:bg-blue-800 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
      >
        Curriculum
      </button>
    </section>
  );
}