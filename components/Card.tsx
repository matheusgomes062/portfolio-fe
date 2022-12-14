import Image from 'next/image'

export default function Projects() {
  return (
  <div className="sm:w-full bg-white rounded-lg drop-shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          alt="Next.js logo"
          src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
          width={900}
          height={300}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
          className="rounded-t-lg"
        />
      </a>
      <div className="px-5 pb-5">
          <a href="#">
              <h5 className="text-xl font-semibold tracking-tight pt-5 text-gray-900 dark:text-white">Project number 1</h5>
          </a>
            <div
              className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full my-2"
            >
              Vue.JS
            </div>
          <div className="flex items-center justify-between mt-10">
              <a href="#" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Visit</a>
          </div>
      </div>
  </div>
  )
}