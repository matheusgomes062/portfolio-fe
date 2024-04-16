import Projects from '@/components/Projects';
import Welcome from '@/components/Welcome';
import { Suspense } from 'react';
import projectsData from '../public/dataJson/projectsData.json';

import Container from '../components/Container';
import Posts from '@/components/Posts';
import SmartLink from '@/components/SmartLink';

export default function Home() {
  const projects = projectsData.slice(0, 4)

  return (
    <Suspense fallback={null}>
      <Container>
        <div className="w-full flex flex-col justify-center items-start max-w-2xl mx-auto">
          <section className='flex flex-col items-start gap-20'>
            <Welcome/>
            <section className='flex flex-col items-center w-full'>
              <h2 className='font-extrabold text-3xl self-start pb-5'>Featured Projects</h2>
              <Projects projects={projects}/>
              <SmartLink label="View more projects" link="/projects" icon="seeMore"/>
            </section>
            <Posts/>
          </section>
        </div>
      </Container>
    </Suspense>
  );
}
