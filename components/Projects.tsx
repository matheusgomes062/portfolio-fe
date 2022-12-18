import Card from './Card';

export default function Projects() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='font-extrabold text-3xl self-start pb-10'>Featured Projects</h2>
      <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1'>
        <Card title="The Markdown Guide" externalLink="#" githubLink="#" source="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png" tags={[{label: "markdown", color: "gray"}]} summary="Book intended to teach and be a guide about Markdown, being the first book of its kind in Brazil. Written in Markdown about Markdown and made available for free!"/>
        <Card title="Project 2" externalLink="#" githubLink="#" source="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png" summary="Lorem ipsum"/>
        <Card title="Project 3" externalLink="#" githubLink="#" source="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png" summary="Lorem ipsum"/>
        <Card title="Project 4" externalLink="#" githubLink="#" tags={[{label: "typescript", color: "blue"}, {label: "angular", color: "red"}]} summary="Lorem ipsum"/>
      </div>
      <div className='flex self-start pt-5 font-normal text-gray-600 dark:text-gray-400 first-line hover:text-gray-200 hover:dark:text-gray-200 transform transition-all'>
        <a href='#' className='flex flex-row items-center'>
          View more projects
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 ml-1"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path></svg>
        </a>
      </div>

    </section>
  );
}
