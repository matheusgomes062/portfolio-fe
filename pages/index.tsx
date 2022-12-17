import Hello from '@/components/Hello';
import Projects from '@/components/Projects';
import Welcome from '@/components/Welcome';
import { Suspense } from 'react';

import Container from '../components/Container';
import Posts from '@/components/Posts';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="w-full flex flex-col justify-center items-start max-w-2xl mx-auto">
          <section className='flex flex-col items-start gap-20'>
            <div className='flex flex-col items-start gap-5'>
              <Hello/>
              <Welcome/>
            </div>
            <Projects/>
            <Posts/>
          </section>
        </div>
      </Container>
    </Suspense>
  );
}
