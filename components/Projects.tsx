import Card from './Card';

export default function Projects() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='font-extrabold text-3xl self-start pb-10'>Featured Projects</h2>
      <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </section>
  );
}
