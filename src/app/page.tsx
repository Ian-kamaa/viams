import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// import LetterPullup from '@/components/magicui/letter-pullup'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
// import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/banner.jpeg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Why choose Viams?."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Expert Guidance: with years of experience in Visa applications,our knowledgeable team will guide you through the entire
          job application process ensuring your application is complete and accurate.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Visa Application">
              At viams you are assured that your visa application be it work or visit will
              be handled with the utmost professionalism.
            </ListItem>
            <ListItem title="Working Visa application">
              Lead by our directors passion for hard work we strive to find job opportunities
              for our clients to enable them move to the next level 
            </ListItem>
            <ListItem title="Tailored solutions">
             We recognise that each applicant is unique .Through our personalised approach 
             we ensure that your application is tailored to meet specific requirements 
             , increasing chances of a successful visa outcome
            </ListItem>
            <ListItem title="Affordable pricing">
             At Viams We believe in providing transparent and convinient pricing for our Services and 
             any monetary issues are handled by our expert team of accountants 

            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}


function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="One on one with some of our clients👨‍🎓"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe empowering ourselves is the answer to the world’s greatest
          challenges. We also see people who have had work experiences outside the country tend to bring their new 
          learnt skills back to the country for the benefit and growth of the country
                  </p>
      </SectionIntro>
      <Container className="mt-16 ">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3 bg-white  rounded-3xl ">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1  transition hover:bg-slate-400">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {/* <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    /> */}
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    '',
}


export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="">
        <FadeIn className="max-w-3xl">
          <h1 className='font-display text-2xl font-bold tracking-tight text-blue-950 [text-wrap:nowrap] sm:text-7xl'>
          "Taking Kenya to the world".
          </h1>

          <h2 className="font-display text-5xl font-medium tracking-tight text-neutral-950  sm:text-7xl">
             
          </h2>
          <p className="mt-6 text-xl text-neutral-600">
            We are a dedicated travel agency based in Nairobi Kenya with the sole purpose of 
            giving people opportunities to travel, live and work in foreign counrties legally with the goal 
            of empowering them to have better and more productive lives 

          </p>
        </FadeIn>
      </Container>

      {/* <Clients /> */}
      <Services />
      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name:'phobia', logo: logoPhobiaLight}}
      >
        Thanks to Viams, my dream of working in UK came true! The process was seamless, and their team was incredibly supportive every step of the way. I now enjoy my mornings surfing at Bondi Beach before heading to my new job. Highly recommended!
      </Testimonial>
      <Testimonial 
        className='mt-24 sm:mt-32 lg:mt-40'
        client={{ name:'' ,logo: logoUnseal}}
      >
        I was overwhelmed with the paperwork and requirements for my UK work visa until I found viams. Their expert guidance made the entire process stress-free. Now, I'm living and working in London, and it's been an amazing experience!"
        
      </Testimonial> */}

      

      <ContactSection />
    </>
  )
}
