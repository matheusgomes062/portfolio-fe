import React, { FunctionComponent } from 'react'
import { AiOutlineEye } from 'react-icons/ai';


interface PostProps {
  /**
   * Title Post
   */
  title: string;
}

const Post: FunctionComponent<PostProps> = ({
  title
}) => {
  return (
      <div className="sm:w-ful h-[22rem] md:h-[23rem] p-5 bg-zinc-100 rounded-lg drop-shadow-xl dark:bg-gray-800 dark:border-gray-700 gap-5 transform hover:scale-[1.01] transition-all">
          <a href="#" className='font-semibold text-4xl md:text-4xl flex items-top'>{title}</a>
          <div className='flex flex-row items-center fixed bottom-0 gap-2 py-5 text-2xl capsize'>
            <AiOutlineEye/>
            <p>5,000</p>
          </div>

      </div>
  )
}

export default Post;
