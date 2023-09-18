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
          <div className="navbar bg-base-200 content-center pl-6 pr-6 rounded-3xl">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#first-session">First Session</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <p className="normal-case  md:text-lg sm:text-md ">Therapy with Aaron Altman</p>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#first-session">First Session</a></li>
                <li><a href="#contact">Contact</a></li>

              </ul>
            </div>
            <div className="navbar-end">
              <Link className="btn btn-xs sm:btn-md btn-outline btn-neutral" href="https://kelledebruin.com/client-portal-contact-information/" target="_blank">Request an appointment</Link>
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
* check on mobile -> wider screen
* basic link analytics

*/
