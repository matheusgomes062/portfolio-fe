import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import Button from './Button';
import cn from 'classnames';


interface CardProps {
  /**
   * Title card
   */
  title: string;
  /**
   * Image source
   */
  source?: string;
  /**
   * Visit link
   */
  link: string;
  /**
   * Tags
   */
  tags?: Array<{label: string, color: string}>;
}

function BannerProject({source}: {source: string | undefined}) {
  if (source) {
    return <Image
          alt="Next.js logo"
          src="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"
          width={600}
          height={150}
          style={{
            maxWidth: '100%',
            height: '150px',
            objectFit: "cover"
          }}
          className="rounded-t-lg"
        />;
  }
  return <div className="w-full h-[150px] rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"/>;
}

const Card: FunctionComponent<CardProps> = ({
  title,
  source,
  link,
  ...props
}) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="sm:w-full h-96 bg-zinc-100 rounded-lg drop-shadow-xl dark:bg-gray-800 dark:border-gray-700 ring-1 ring-gray-900/5">
        <a href="#">
          <BannerProject source={source}/>
        </a>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight pt-5 text-gray-900 dark:text-white">
                  {title}
                </h5>
            </a>
              {
                props.tags?.map((object: {label: string, color: string}, i: number) =>
                  <div
                    className={cn(`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-${object.color}-200 text-${object.color}-700 rounded-full my-2 mr-2`)}
                    key={i}
                  >
                    {object.label}
                  </div>
                )
              }
              
            <div className='flex flex-row items-center fixed bottom-5 gap-5'>
              <Button
                aria="Visit Github Repo"
                link="#"
                >Visit
                  <HiExternalLink/>
              </Button>
              
              
              <Button isIcon="false"
                link="#">
                <FaGithub/>
              </Button>
              
              
              <Button isIcon="false"
                link="#">
                <FaGithub/>
              </Button>

              <Button isIcon="false"
                link="#">
                <FaGithub/>
              </Button>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Card;
