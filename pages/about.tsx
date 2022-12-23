import Container from '@/components/Container';
import ExperienceCard from '@/components/ExperienceCard';
import { FaDev, FaGithubSquare, FaLinkedin, FaMedium, FaTwitterSquare } from 'react-icons/fa';
import { SiGmail, SiHashnode } from 'react-icons/si';

export default function About() {
  return (
    <Container title="About – Matheus Gomes">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <div className='list-none flex flex-row justify-start gap-3 flex-wrap'>
            <a href="https://github.com/matheusgomes062">
              <FaGithubSquare className='w-11 h-11'/>
            </a>
            <a href="https://twitter.com/matheusgomes062">
              <FaTwitterSquare className='w-11 h-11'/>
            </a>
            <a href="https://www.linkedin.com/in/matheus-gomes-dev/">
              <FaLinkedin className='w-11 h-11'/>
            </a>
            <a href="https://dev.to/matheusgomes062">
              <FaDev className='w-11 h-11'/>
            </a>
            <a href="https://mgodev.hashnode.dev/">
              <SiHashnode className='w-11 h-11'/>
            </a>
            <a href="https://matheusgomes062.medium.com/">
              <FaMedium className='w-11 h-11'/>
            </a>
            <a href="mailto: matheusgomes062@gmail.com">
              <SiGmail className='w-11 h-11'/>
            </a>
          </div>
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
                    image: "/ucla-logo.png"
                  },
                  {
                    alt: "UCLA website",
                    image: "/ucla-website.jpeg"
                  },
                  {
                    alt: "UCLA presentation",
                    image: "/ucla-presentation.jpeg"
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
                  image: "/odona-logo.jpeg"
                },
                {
                  alt: "Odona website",
                  image: "/odona-website.png"
                },
                {
                  alt: "Odona Mentoree",
                  image: "/odona-mentoree.png"
                }
              ]}
              startDate="04/2022"
              endDate='now'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
            <ExperienceCard
              role="Researcher"
              company='Unifesp'
              source="https://www.unifesp.br/"
              description="Project coordinated by Prof. Dr. Elke Stedefeldt, Prof. Dr. Ezequiel Zorzal and by doctoral student Rayane Stephanie Gomes de Freitas. Activities performed: architecture and development of the front-end of the
                application. Contemplating but not limited to System Design, UI, Report Export,REST call creation, page creation, navigation logic, form creation
                dynamic, responsiveness, and store of the application. Using technologies such as Vue.js, Axios, Element-UI, Bootstrap, Sass, Git, Vercel, among others."
              images={[
                {
                  alt: "Unifesp logo",
                  image: "/unifesp-logo.png"
                },
                {
                  alt: "PARA Resiliencia website",
                  image: "https://user-images.githubusercontent.com/47605309/155584050-fe6039f7-2616-4fab-9403-ba7b7743d8f4.png"
                },
                {
                  alt: "Certificate",
                  image: "/IC-certificate.png"
                }
              ]}
              startDate="01/2021"
              endDate='05/2022'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
            <ExperienceCard
              role="Software Engineer"
              company='PWR Pixel'
              source="#"
              description="Acted as a team leader for a global and remote development team, providing training and teaching documentation for the new developers. This content was done in Portuguese and English. Provided specialized front-end consulting services for large companies such as 3 Corações, as well as startups such as GlobalPro Fit, Codex among others. Activities provided involve improving an application by 50% of loading performance. Code reduction by 45% with the application of clean code and good practices. Introduction of code patterns for both commit and development. Active participation in code review and hiring of new developers."
              images={[
                {
                  alt: "PWR Pixel logo",
                  image: "/pwr-pixel-logo.jpeg"
                },
                {
                  alt: "Codex logo",
                  image: "/codex-logo.png"
                },
                {
                  alt: "3 corações LLC.",
                  image: "/logo-cafe-3-coracoes.webp"
                },
              ]}
              startDate="01/2021"
              endDate='04/2022'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
            <ExperienceCard
              role="Lead Front-end Engineer"
              company='Pixfy'
              source="#"
              description="Leaded the front-end team at Pixfy, delivering and conducting 3 projects for startups, ONG's, and other companies. Built entire projects with VueJs, Sass, and other technologies. Designed a website project with AdobeXd to an electrical engineering company."
              images={[
                {
                  alt: "Coding",
                  image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                  alt: "Startup",
                  image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                  alt: "Notebook",
                  image: "https://images.unsplash.com/photo-1562907550-096d3bf9b25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                },
              ]}
              startDate="09/2020"
              endDate='05/2021'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
            <ExperienceCard
              role="Back-end developer"
              company='Ânima Educação'
              source="https://animaeducacao.com.br/"
              description="Development of apis in .NET Core for the Continuous Education sector in Ânima institution.Development of pages for configuring tools for students.Development of Gitflow and Articles for internal use. Implementation of practices and processes. Implementation of new and modern technologies like git commitizen. Use of TDD with XUnity and NSubstitute.Implementation of the certificate issuing service, including the development of the pdf in html, css and javascript."
              images={[
                {
                  alt: "Ânima educacao logo",
                  image: "/anima-educacao-logo.jpg"
                },
                {
                  alt: "Stand for Anima Educacao",
                  image: "/anima-educacao-stand.jpg"
                },
                {
                  alt: "Backend developer",
                  image: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                },
              ]}
              startDate="10/2020"
              endDate='03/2021'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
            <ExperienceCard
              role="Full stack developer"
              company='Agrotools'
              source="https://agrotools.com.br/"
              description="Mobile application development using React-Native for front-end and C # for back-end. Implemented documentation about the configuration of the environment, such as quick and useful changes to facilitate the work of the employees."
              images={[
                {
                  alt: "Agrotools logo",
                  image: "/agrotools-logo.png"
                },
                {
                  alt: "Agrotools software",
                  image: "/agrotools-software.webp"
                },
                {
                  alt: "Agrotools prsentation",
                  image: "/agrotools-presentation.webp"
                },
              ]}
              startDate="07/2020"
              endDate='10/2020'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
            <ExperienceCard
              role="Intern"
              company='Agrotools'
              source="https://agrotools.com.br/"
              description="Application development using Javascript, Jquery and also modern frameworks like Vue.js and Scss. Implemented translation feature (i18n) in an insurance project. Development of new tools using famous web map services. Tool development that facilitates the creation of queries at first user-level and developer level. Created a corporate video of company presentations using animation and digital art resources."
              images={[
                {
                  alt: "Agrotools logo",
                  image: "/agrotools-logo.png"
                },
                {
                  alt: "Agrotools software",
                  image: "/agrotools-software.webp"
                },
                {
                  alt: "Agrotools prsentation",
                  image: "/agrotools-presentation.webp"
                },
              ]}
              startDate="11/2018"
              endDate='07/2020'
            />
            <div className='border-b border-gray-300 dark:border-gray-700 my-7'/>
            <ExperienceCard
              role="Writer"
              company='Bitnotícias'
              source="https://bitnoticias.com.br/"
              description="I wrote technology news in cryptocurrencies and blockchain for the site bitnoticias.com.br."
              images={[
                {
                  alt: "Working blog table",
                  image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                  alt: "Bitcoin coins",
                  image: "https://images.unsplash.com/photo-1609726494499-27d3e942456c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
                {
                  alt: "Crypto graphs",
                  image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                },
              ]}
              startDate="11/2018"
              endDate='07/2020'
            />
          </section>
        </div>
      </div>
    </Container>
  );
}
