import { type Metadata } from 'next'
import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-slate-900 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Viams culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          Passionate and Intergity are our driving forces day in day out
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Resilience" invert>
            At Viams Our team faces challenges head-on, knowing that there’s no  
            option to back down or take a break.Always working on the next lead.
            
          </GridListItem>
          <GridListItem title="Flexibility" invert>
            At Viams our  team can work under many conditions and with all types
            kinds of clients giving the front seat experience in providing professional 
            service
          </GridListItem>
          <GridListItem title="Innovation" invert>
            At Viams we are always pursing new and emerging job and immigration opportunities and our
            team is commited to finding the best match based on oyur likes and intrests
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


export const metadata: Metadata = {
  title: 'About us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About Viams" title="Taking Kenya to the world">
        <p>
        Our strength is rooted in our collaborative approach, where we prioritize placing our clients at the heart 
        of our operations. We believe that by fostering a culture of teamwork and open communication, we can better 
        understand and address the unique needs of each client. This client-centric philosophy ensures that every decision 
        we make and every action we take is aligned with our clients goals and aspirations. Through this commitment to collaboration, 
        we not only build stronger relationships but also deliver exceptional outcomes that exceed expectations. By working together, 
        we harness the collective expertise and creativity of our team, driving innovation and delivering tailored solutions that truly make a difference.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Viams international was founde in the year 2018 by Joseph who is the founder.
            The main goal behind this was to encourage people to travel,see and have new experiences living and working abroad
            This vision was inspired by our founder who had experience travelling abroad living and working there.

          </p>
          <p>
            Through out the years Viams has flourished as one the most trusted agencies in Kenya and has a proven   
            track record 
            of success in finding job placements for their clients.We are also happy to announce that 
            as of April 2024 the company has  become an official partner of the British counci IELTS
            partenership  program. 
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="200+" label=" Customers served" />
          <StatListItem value="56" label="Successful job placements" />
          <StatListItem value="60%" label="Visa success rate"/>
          <StatListItem value="130" label="Travel Visa successful applications"/>

        </StatList>
      </Container>

      <Culture />

    <FadeIn/>
    </>
  )
}
