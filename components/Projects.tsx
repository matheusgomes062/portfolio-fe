import Card from './Card';
import SmartLink from './SmartLink';

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
      <SmartLink label="View more projects" link="#" icon="seeMore"/>
    </section>
  );
}
