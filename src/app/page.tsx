import Image from 'next/image'
import Link from 'next/link';

const Content = [
  {
    title: 'About',
    text: (<>
      <p>I am a Pre-Licensed Professional Counselor in the state of Oregon, based in the Portland area.</p>
      <p>Born and raised in Oregon, I graduated from Edinboro University in summer 2023 with a masters degree in Clinical Mental Health Counseling. I spent September 2022-July 2023 as a Professional Counselor Intern with Kelly DeBruin Counseling in Oregon City, working with couples, individuals and child clients.</p>
      <p>Before becoming a therapist, I was a software engineer, but found myself interested in therapy as I moved on in my engineering career. I spent over 300 hours volunteering with Oregon’s affiliate of #988, the National Suicide Prevention Lifeline before starting my counseling graduate work.</p>
    </>),
    background: 'bg-neutral',
    textcolor: 'text-gray-300',
    image: (<Image
      priority
      src="/AaronA-004.jpg"
      height={2496}
      width={1666}
      alt="Image of therapist Aaron Altman"
      className="mt-0"
    />),
    anchor: 'about'
  },
  {
    title: 'Services',
    text: (<><h2>I specialize in individual therapy for adults, with focus areas in trauma, depression, and men&apos;s issues.</h2>
      <p>If you are looking to improve your mood, friendships and relationships, ease tensions in work and family life, and resolve long-running issues that may be holding you back, I would look forward to working with you. This work takes attachment, co-regulation and the social neurobiology of emotions seriously as foundations of mental health. With the help of other trauma-specific techniques, we can also work towards peace and fulfillment in the aftermath of trauma, whether single-incident or chronic and complex.</p>
      <h4>Evidence-based therapy</h4>
      <p>My work uses the latest evidence on how to tailor the therapeutic process to your needs and preferences so that you will be in the best possible situation to flourish, make progress on your therapeutic goals and weather the pain of addressing difficult situations in your life.</p>
      <p>My focus is on Rogerian therapy. This therapy gives you a chance to explain your struggles on your own terms, and to have positive impulses and strengths that exist alongside these struggles recognized.</p>
      <p>When you feel this reflected back with basic care, you may begin to feel your own solutions bubble up into awareness and take shape in your life outside of therapy.</p></>),
    background: 'bg-primary-content',
    textcolor: 'bg-primary-content',
    anchor: 'services'
  },
  {
    title: 'Our first session',
    text: (<>
      <h2>Making therapy work for you</h2><p>In the first session, you and I will co-create a process tailored to you. This can be open ended or can focus on concrete skills like goal-setting, boundary-setting, emotion naming and regulation, mindfulness, and compassion towards others and towards yourself.</p>
      <p>If you prefer more concrete direction, initial work may focus on skills like goal-setting, boundary-setting, emotion naming and regulation, mindfulness, and compassion towards others and towards yourself.  Having developed confidence in the process and any skills that resonate, you may also find deeper satisfaction in longer term work to address difficult states like chronic anger, shame, or recurring emotionally activating situations in daily life. </p></>),
    background: 'bg-secondary-content',
    textcolor: 'bg-accent-content',
    anchor: 'first-session'
  },
  {
    title: 'Contact',
    text: (<><h3>Think I might be a good fit for you?</h3><p className="mb-0">Get in touch for a free 15 minute consultation.</p><p className="mt-0">Call <a className="link link-hover" href="tel:+9713596158">971.359.6158</a> | Email <a className="link link-hover" href="mailto:aaron@kelledebruin.com">aaron@kelledebruin.com</a></p>
      <h3>Looking to get established as a new client?</h3><p className="mb-2">Request an appointment below (via Kelly DeBruin Counseling).</p>
      <div className="mt-0"><Link className="btn btn-neutral" href="https://kelledebruin.com/client-portal-contact-information/" target="_blank">Request an appointment</Link></div>
      <p className="mt-4"><Link className="link link-hover" href="https://www.psychologytoday.com/us/therapists/aaron-altman-tigard-or/1006085" target="_blank">You can also find me on Psychology Today.
      </Link></p></>),
    background: 'bg-base-100',
    anchor: 'contact'
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="">
        <div className="prose w-full m-auto pt-16 pb-24 text-center">
          <div className="mb-1">
            <h1 className='lg:text-5xl'>Start therapy <br />with Aaron.</h1>
          </div>
          <div className="px-3 flex flex-col">
            <p className="mt-1 px-4 text-lg lg:text-xl">Currently accepting new teletheraphy clients in Oregon.</p>
            <div className="flex flex-col mx-8 md:mx-0 md:flex-row justify-center">
              <Link className="btn btn-primary mb-4 md:mr-8" href="https://kelledebruin.com/client-portal-contact-information/" target="_blank">Request an appointment</Link>
              <a className="btn btn-primary" href="#contact">Schedule a free consultation </a></div>
          </div>
        </div>
      </section>
      {Content.map((item, index) => {
        if (item.image) {
          return (
            <section className={`flex flex-col md:flex-row ${item.background}`} id={item.anchor} key={index}>
              <div className="prose basis-1/3 hidden md:block ">
                {item.image}
              </div>
              <div className={`prose basis-2/3 p-24 md:ml-24 ${item.textcolor}`}>
                <h1 className={`${item.textcolor}`}>{item.title}</h1>
                <div className="avatar block md:hidden">
                  <div className="w-72 rounded-full">{item.image}</div></div>
                {item.text}
              </div>
            </section>
          )
        }
        return (
          <section className={`${item.background} flex flex-col md:flex-row py-24 px-36 `} key={index} id={item.anchor}>
            <div className="prose basis-1/3"><h1>{item.title}</h1></div>
            <div className="prose basis-2/3 px-24">{item.text}</div>
          </section>
        )
      })}
    </main >
  )
}
