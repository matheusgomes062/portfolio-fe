import { Suspense } from 'react';

import Container from '../components/Container';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto">
        </div>
      </Container>
    </Suspense>
  );
}
