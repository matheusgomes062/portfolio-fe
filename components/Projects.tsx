import Card from './Card';

export default function Projects() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='font-extrabold text-3xl self-start pb-10'>Featured Projects</h2>
      <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1'>
        <Card title="Project 1" link="#" source="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png" tags={[{label: "react", color: "blue"}, {label: "vue.js", color: "green"}]}/>
        <Card title="Project 2" link="#" source="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"/>
        <Card title="Project 3" link="#" source="https://assets.vercel.com/image/upload/v1538361091/repositories/next-js/next-js-bg.png"/>
        <Card title="Project 4" link="#"  tags={[{label: "typescript", color: "blue"}, {label: "angular", color: "red"}]}/>
      </div>

    </section>
  );
}
