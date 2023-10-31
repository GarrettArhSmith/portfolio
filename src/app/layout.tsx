import './globals.css'
import type { Metadata } from 'next'
import { PiUserListDuotone, PiCodeDuotone, PiHouseDuotone, PiChatTextDuotone } from 'react-icons/pi'
import CardsNav from '../components/CardsNav/CardsNav'

export const metadata: Metadata = {
  title: 'Garrett Smith',
  description: 'Garrett Smith\'s Portfolio',
}

const routes = [
  {
    path: '/',
    name: 'Home',
    icon: <PiHouseDuotone />,
  },
  {
    path: '/about',
    name: 'About',
    icon: <PiUserListDuotone />,
  },
  {
    path: '/work',
    name: 'Work',
    icon: <PiCodeDuotone />,
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: <PiChatTextDuotone />,
  },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='default'>
        <div className='wrapper'>
          <main className='main'>
            {children}
          </main>
          <CardsNav routes={routes} />
        </div>
      </body>
    </html>
  )
}
