import { type Metadata } from 'next'

// import { Blockquote } from '@/components/Blockquote'
// import {Section} from ''
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
// import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/abroad.jpg'
import imageWhiteboard from '@/images/planning.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Needs() {
  return (
    <Section title="Client Needs" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals.We take time to understand our clients specific requirements, preferences and objectives
        </p>
        <p>
          Whether it’s a conference, a business meeting, or a team-building retreat, we tailor our services to meet your unique needs.This is a very
          <strong className="font-semibold text-neutral-950">important</strong>
          aspet of assesing our clients needs.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Steps included in understanding your needs.
      </h3>
      <TagList className="mt-4">
        <TagListItem>Initial consultation</TagListItem>
        <TagListItem>Personal Touch</TagListItem>
      </TagList>
    </Section>
  )
}

function Planning() {
  return (
    <Section title="Planning" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p><strong>Bespoke Planning:<br/></strong>Based on the information gathered during our consultation, our expert planners get to work on crafting a personalized itinerary. We consider all aspects, including preferred travel dates, destination specifics, and personal preferences</p>

        <p><strong>Comprehensive Coordination:</strong><br/>We handle every detail, from booking flights and accommodations to arranging local transportation and making dining reservations. Our goal is to create an itinerary that maximizes productivity while allowing for comfort and convenience.</p>
        
      </div>
    </Section>
  )
}

function Booking() {
  return (
    <Section title="Seamless Booking process" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p><strong className='font-semibold text-neuta-950'>Advanced Technology:</strong><br/>We leverage the latest travel technology to ensure seamless and efficient booking processes. Our systems are designed to secure the best deals and ensure availability, saving you time and money</p>
        <p><strong className='font-semibold text-neuta-950'>Detailed oriented:</strong><br/>Each booking is meticulously checked to ensure accuracy. We provide a comprehensive itinerary document that outlines all bookings, schedules, and important information, ensuring you have everything you need in one place</p>
      </div>

    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          At viams we have a culture of <strong>Balance</strong> and <strong>passion</strong>
           <span></span>all fostering a perfect work-life balance for our employees.In turn this leads to better service delivery to our clents.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Resilience">
            At Viams Our team faces challenges head-on, knowing that there’s no option to back down or take a break.Always working on the next lead.
          </GridListItem>
          <GridListItem title='Flexibility'>
            At Viams our team can work under many conditions and with all types kinds of clients giving the front seat experience in providing professional service

          </GridListItem>
          <GridListItem title='Innovation'>
            At Viams we are always pursing new and emerging job and immigration opportunities and our team is commited to finding the best match based on oyur likes and intrests

          </GridListItem>
          <GridListItem title="Efficient">
            At viams we pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>

          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>

          <GridListItem title="Honest">
            At Viams we are commited to transpaency about all of our processes, and ensure that all financial sevices are recorded properly and evey clients cent is accounted for and invoives ae available  
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          <strong className='font-semibold text-neutal-950' >"Taking Kenya to the world"</strong>
          <br />
          As our motto suggests we are commited to serving our clients in the most efficient way possible
          .We believe in creating seamless and enriching work and travel experiences tailored to 
          your needs.Here are the steps we take to ensure this:
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Needs />
        <Planning />
        <Booking />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
