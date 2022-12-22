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
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  role,
  company,
  source,
  description,
  images,
  startDate,
  endDate
}) => {
  return (
    <section className='bg-gray-200 dark:bg-gray-800 p-5 rounded-lg'>
      <div className='flex flex-row justify-between gap-3'>
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
      <h3 className='mb-0'>{role} @ <a href={source} className='uppercase'>{company}</a></h3>
      <p className='text-xs text-gray-400 dark:text-gray-400 uppercase'>{startDate} - {endDate}</p>
        <p>{description}</p>
  </section>
  )
}

export default ExperienceCard;
