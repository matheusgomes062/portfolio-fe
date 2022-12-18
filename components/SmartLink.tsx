import React, { FunctionComponent } from 'react'
import cn from 'classnames';


interface SmartLinkProps {
  /**
   * Link label
   */
  label: string;
  /**
   * Link href
   */
  link: string;
  /**
   * In case there's an Icon
   */
  icon?: string;
}

function IconSelector(icon: string) {
  if (icon === 'seeMore') {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path></svg>
  }
}

const SmartLink: FunctionComponent<SmartLinkProps> = ({
  label,
  link,
  icon,
  ...props
}) => {
  return (
      <div className='flex self-start pt-5 font-normal text-gray-600 dark:text-gray-400 first-line hover:text-gray-200 hover:dark:text-gray-200 transform transition-all'>
        <a href='#' className='flex flex-row items-center'>
          {label}
          {icon && IconSelector(icon)}
        </a>
      </div>
  )
}

export default SmartLink;