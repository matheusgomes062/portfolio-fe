import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container';
import avatar from 'public/profile-pic.png';

export default function About() {
  return (
    <Container title="About – Matheus Gomes">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/matheusgomes062">@matheusgomes062</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/matheusgomes062">@matheusgomes062</a>
            </li>
            <li>
              Website: <Link href="https://mgodev.vercel.app">https://mgodev.vercel.app</Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/matheus-gomes-dev/">
                https://www.linkedin.com/in/matheus-gomes-dev
              </a>
            </li>
          </ul>
          <section>
            <h2>My journey</h2>
            <div>
              <div className='flex flex-row justify-between gap-3'>
                <Image
                  className="rounded-lg md:self-center"
                  src="/ucla-logo.png"
                  alt="UCLA"
                  width={150}
                  height={150}
                  style={{
                    minWidth: '22%',
                    height: '100px',
                    objectFit: "cover"
                  }}
                  />
                <Image
                  className="rounded-lg md:self-center w-1/2"
                  src="/ucla-website.jpeg"
                  alt="UCLA"
                  width={150}
                  height={150} 
                  style={{
                    minWidth: '50%',
                    height: '100px',
                    objectFit: "cover"
                  }}
                />
                <Image
                  className="rounded-lg md:self-center"
                  src="/ucla-presentation.jpeg"
                  alt="UCLA"
                  width={150}
                  height={150}
                  style={{
                    minWidth: '22%',
                    height: '100px',
                    objectFit: "cover"
                  }}
                />
              </div>
              <h3>Sr. Software Engineer @ UCLA</h3>
                <p>Working with the University of California at Los Angeles to create a new library access page. Using Vue 2, Rollup, Nuxt, Storybook, Cypress, Git, GraphQL and other modern technologies.
                I worked developing components based on designs in Figma and going through a rigid development workflow, using e2e tests, peer review and pair programming. The components were initially developed with the intention of being hard coded and then we changed the focus to develop the components as a library and reuse in other applications using rollup and vue 2.
                I also worked on the UCLA MEAP website. One of the most important pages in the university library.
                </p>
            </div>
          </section>
          <h3>Long, 3rd Person</h3>
          <p>
            Lee Robinson is the VP of Developer Experience at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web and leads the Next.js community. He leads the
            community for the React framework Next.js and is an open-source
            contributor. An educator, writer, and speaker, Lee has created
            courses on React, Next.js, and web development.
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web. I'm a Next.js contributor and help
            lead our open-source communities. I'm passionate about frontend
            development and have created courses on React, Next.js, and web
            development. I'm an advisor and investor in early stage startups.
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Lee Robinson is the VP of Developer Experience at{' '}
            <a href="http://vercel.com/">Vercel</a>, where he helps developers
            build a faster web.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Lee. I'm the VP of Developer Experience at{' '}
            <a href="https://vercel.com/">Vercel</a>, where my team helps
            developers build a faster web.
          </p>
          <h3>Education</h3>
          <p>
            Lee Robinson graduated from Iowa State University with a B.S. in
            Computer Engineering.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Lee Robinson headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
