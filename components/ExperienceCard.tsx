import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { FaDev, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import Button from './Button';
import cn from 'classnames';


interface ExperienceCardProps {
  /**
   * Title ExperienceCard
   */
  title: string;
  /**
   * Company link source
   */
  source?: string;
  /**
   * Description for the experience
   */
  description: string;
  /**
   * Array of images
   */
  images: Array<{alt: string, image: string}>;
  /**
   * Date range for your experience
   */
  date: string;
}

function BannerProject({source}: {source: string | undefined}) {
  if (source) {
    return <Image
          alt="Project image"
          src={source}
          width={600}
          height={150}
          style={{
            minWidth: '100%',
            height: '150px',
            objectFit: "cover"
          }}
          className="rounded-t-lg"
        />;
  }
  return <div className="w-full h-[150px] rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"/>;
}

function TagTheme(color: string) {
  const theme = [
    {color: 'green', class:'bg-green-200 text-green-700'},
    {color: 'blue', class:'bg-blue-200 text-blue-700'},
    {color: 'yellow', class:'bg-yellow-200 text-yellow-700'},
    {color: 'red', class:'bg-red-200 text-red-700'},
    {color: 'gray', class:'bg-gray-200 text-gray-700'},
    {color: 'pink', class:'bg-pink-200 text-pink-700'},
    {color: 'purple', class:'bg-purple-200 text-purple-700'},
    {color: 'orange', class:'bg-orange-200 text-orange-700'}
  ].filter(item =>
    item.color === color
  )
  return theme[0].class.toString()
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  title,
  source,
  externalLink,
  githubLink,
  summary,
  ...props
}) => {
  return (
    <div className="relative group transform hover:scale-[1.01] transition-all">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
    <div className="sm:w-full h-[27rem] md:h-[28rem] bg-zinc-100 rounded-lg drop-shadow-xl dark:bg-gray-800 dark:border-gray-700 ring-1 ring-gray-900/5">
        <a href={externalLink || githubLink}>
          <BannerProject source={source}/>
        </a>
        <div className="px-5 pb-5">
            <a href={externalLink || githubLink}>
                <h5 className="text-xl font-semibold tracking-tight pt-5 text-gray-900 dark:text-white">
                  {title}
                </h5>
            </a>
            <div className='h-20 md:h-20 mb-3 border-b border-gray-300 dark:border-gray-700 text-gray-900'>
              {
                props.tags?.map((object: {label: string, color: string}, i: number) =>
                <div
                className={cn(`cursor-pointer text-[10px] inline-flex items-center font-bold leading-sm uppercase px-2 rounded-full mr-2 transform hover:scale-[1.05] transition-all ${TagTheme(object.color)}`
                )}
                key={i}
                >
                    {object.label}
                  </div>
                )
              }
            </div>
            <div className='text-start relative mt-1 text-sm h-[4rem] md:h-[5rem]'>
              <p className='absolute bottom-0'>
                {summary}
              </p>
            </div>
            <div className='flex flex-row items-center fixed bottom-5 gap-5'>
              { externalLink && <Button
                  aria="Visit External Link"
                  link={externalLink}
                  >Visit
                    <HiExternalLink/>
                </Button>
              }
              
              { githubLink && <Button isIcon="false"
                  link={githubLink}>
                <FaGithub/>
              </Button>
              }
            </div>
        </div>
    </div>
  </div>
  )
}

export default ExperienceCard;