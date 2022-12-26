import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import { FaDev, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import Button from './Button';
import cn from 'classnames';


interface ExperienceCardProps {
  /**
   * Role when working on the company
   */
  role: string;
  /**
   * Company name
   */
  company: string;
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
   * startDate for your experience
   */
  startDate: string;
  /**
   * startDate for your experience
   */
  endDate: string;
  /**
   * Tags with label and color to show in the card
   */
  tags?: Array<{label: string, color: string}>;
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
  role,
  company,
  source,
  description,
  images,
  startDate,
  endDate,
  ...props
}) => {
  return (
    <section className='bg-gray-200 dark:bg-gray-800 p-5 rounded-lg'>
      <div className='md:flex flex-row justify-between gap-3 hidden'>
        {
          images.map((object: {alt: string, image: string}, i: number) =>
            <Image
              key={i}
              className="rounded-lg md:self-center even:w-[50%]"
              src={`${object.image}`}
              alt={object.alt}
              width={150}
              height={150}
              style={{
                minWidth: '22%',
                height: '100px',
                objectFit: "cover"
              }}
              />
          )
        }
      </div>
      <div className='flex flex-row md:hidden'>
        <Image
          className="rounded-lg"
          src={`${images[0].image}`}
          alt={images[0].alt}
          width={150}
          height={150}
          style={{
            minWidth: '100%',
            height: '200px',
            objectFit: "cover"
          }}
          />
      </div>
      <h3 className='mb-0'>{role} @ <a href={source} className='uppercase'>{company}</a></h3>
      <p className='text-xs text-gray-400 dark:text-gray-400 uppercase'>{startDate} - {endDate}</p>
      <div className=''>
          {
            props.tags?.map((object: {label: string, color: string}, i: number) =>
            <div
            className={cn(`cursor-pointer text-xs inline-flex items-center font-bold leading-sm uppercase px-2 rounded-sm mr-2 hover:-translate-y-1 transition-all ${TagTheme(object.color)}`
            )}
            key={i}
            >
                {object.label}
              </div>
            )
          }
      </div>
      <p>{description}</p>
  </section>
  )
}

export default ExperienceCard;
