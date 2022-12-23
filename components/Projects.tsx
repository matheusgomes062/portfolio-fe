import Card from './Card';
import SmartLink from './SmartLink';

export default function Projects() {
  return (
    <section className='flex flex-col items-center w-full'>
      <h2 className='font-extrabold text-3xl self-start pb-5'>Featured Projects</h2>
      <div className='grid gap-5 w-full md:grid-cols-2 sm:grid-cols-1'>
        <Card
        title="LaraZillow"
        externalLink='https://mgodev-next.vercel.app/'
        githubLink="https://github.com/matheusgomes062/larazillow"
        source="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        tags={
          [
            {label: "Vue3", color: "green"},
            {label: "Javascript", color: "yellow"},
            {label: "Vite", color: "purple"},
            {label: "Tailwindcss", color: "blue"},
            {label: "Git", color: "gray"},
            {label: "Laravel", color: "red"},
            {label: "Php", color: "blue"},
            {label: "Vercel", color: "gray"},
            {label: "Docker", color: "blue"},
            {label: "Inertia", color: "blue"},
            {label: "Eloquent ORM", color: "red"},
          ]
        } 
        summary="Project coordinated by university professors and master degree students. Architecture and development of the front-end made by me."/>
        <Card
          title="PARA Resiliencia"
          githubLink="https://github.com/matheusgomes062/PARA-resiliencia"
          source="https://user-images.githubusercontent.com/47605309/155584050-fe6039f7-2616-4fab-9403-ba7b7743d8f4.png"
          tags={
            [
              {label: "Vue.js", color: "green"},
              {label: "Bootstrap", color: "blue"},
              {label: "Figma", color: "purple"},
              {label: "Sass", color: "pink"},
              {label: "Git", color: "gray"},
              {label: "Vercel", color: "gray"},
            ]
          } 
          summary="Project coordinated by university professors and master degree students. Architecture and development of the front-end made by me."/>
        <Card
          title="Portfolio - mgodev"
          externalLink='https://mgodev-next.vercel.app/'
          githubLink="https://github.com/matheusgomes062/portfolio-fe"
          source="https://user-images.githubusercontent.com/47605309/209061871-90fa5ebc-0a87-4b44-b1bc-f2fd8d13df90.png"
          tags={
            [
              {label: "Next.js", color: "gray"},
              {label: "Edge", color: "orange"},
              {label: "Typescript", color: "blue"},
              {label: "Git", color: "gray"},
              {label: "Turbopack", color: "red"},
              {label: "Tailwindcss", color: "blue"},
              {label: "Prisma", color: "yellow"},
              {label: "Vercel", color: "gray"},
              {label: "Spotify-API", color: "green"},
              {label: "PlanetScale", color: "gray"},
            ]
          } 
          summary="Project coordinated by university professors and master degree students. Architecture and development of the front-end made by me."/>
          <Card
            title="The Markdown Guide"
            externalLink="https://drive.google.com/file/d/18sS8Pb7p22uRgDwFTOh1kI4VaVSWDy9Y/view"
            githubLink="https://github.com/matheusgomes062/guia-markdown"
            source="https://user-images.githubusercontent.com/47605309/155583890-adb2059d-f0fc-43e5-814c-e3963fbe6501.png"
            tags={
              [
                {label: "markdown", color: "blue"},
                {label: "Git", color: "gray"},
                {label: "Brazil", color: "green"},
                {label: "Git", color: "gray"},
                {label: "Book", color: "purple"},
              ]
            } 
            summary="Book intended to teach and be a guide about Markdown. Written in Markdown about Markdown and made available for free!"/>
      </div>
      <SmartLink label="View more projects" link="#" icon="seeMore"/>
    </section>
  );
}
