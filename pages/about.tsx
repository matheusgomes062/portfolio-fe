import Link from 'next/link';
import Image from 'next/image';

import Container from '@/components/Container';
import avatar from 'public/profile-pic.png';
import ExperienceCard from '@/components/ExperienceCard';

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
            <ExperienceCard
              role="Sr. Software Engineer"
              company='UCLA'
              source="https://ucla.edu"
              description="Working with the University of California at Los Angeles to create a new library access page. Using Vue 2, Rollup, Nuxt, Storybook, Cypress, Git, GraphQL and other modern technologies.
              I worked developing components based on designs in Figma and going through a rigid development workflow, using e2e tests, peer review and pair programming. The components were initially developed with the intention of being hard coded and then we changed the focus to develop the components as a library and reuse in other applications using rollup and vue 2.
              I also worked on the UCLA MEAP website. One of the most important pages in the university library."
                images={[
                  {
                    alt: "UCLA",
                    image: "ucla-logo.png"
                  },
                  {
                    alt: "UCLA website",
                    image: "ucla-website.jpeg"
                  },
                  {
                    alt: "UCLA presentation",
                    image: "ucla-presentation.jpeg"
                  }
                ]}
              startDate="04/2022"
              endDate='12/2022'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
            <ExperienceCard
              role="Mentor"
              company='Odona'
              source="https://www.odona.com.br/teacher/matheus-gomes/"
              description="Front-end technology mentor for diverse niches of people belonging to underrepresented groups. Such as: black people, indigenous people, people who identify with the female gender, people with disabilities, people residing in peripheral regions and LGBTQIA+ people."
              images={[
                {
                  alt: "Odona logo",
                  image: "odona-logo.jpeg"
                },
                {
                  alt: "Odona website",
                  image: "odona-website.png"
                },
                {
                  alt: "Odona Mentoree",
                  image: "odona-mentoree.png"
                }
              ]}
              startDate="04/2022"
              endDate='now'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
          </section>
        </div>
      </div>
    </Container>
  );
}
