import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Sora } from 'next/font/google'

const inter = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Therapy with Aaron Altman',
  description: 'Home of therapist/mental health counselor Aaron Altman in Oregon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter" className="scroll-smooth scroll-pt-8">
      <body className={inter.className}>
        <div className="p-4 sticky top-0 z-30">
          <div className="navbar bg-base-200 content-center pl-6 pr-6 rounded-3xl w-full">

            <div className="flex-1">
              <p className="normal-case text-xl">Therapy with Aaron Altman</p>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 items-baseline">

                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#first-session">First Session</a></li>
                <li><a href="#contact">Contact</a></li>
                <div className="ml-4"><Link className="btn btn-outline btn-neutral" href="https://kelledebruin.com/client-portal-contact-information/" target="_blank">Request an appointment</Link></div> {/* or schedule a free consult? */}
              </ul>
            </div>
          </div>
        </div>
        {children}</body>
    </html>
  )
}

/* TODO 
* responsive header
* add anchor links DONE
* basic SEO
* fuck wit colors/theme DONE
* favicon
* have aaron double check content
* GH repo DONE
*/
