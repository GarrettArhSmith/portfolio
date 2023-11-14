import React from 'react'
import s from './Contact.module.css'
import { IoIosMail, IoIosCall, IoLogoLinkedin, IoIosDocument } from "react-icons/io";
import ContactItem from '@/components/ContactItem/ContactItem'

type Props = {}

const contactItems = [
  {
    href: 'mailto:garrettarhsmith@gmail.com',
    icon: <IoIosMail className={s.contactIcon} />,
    tooltip: 'garrettarhsmith@gmail.com'
  },
  {
    href: 'tel:+17406014739',
    icon: <IoIosCall className={s.contactIcon} />,
    tooltip: '+1(740) 601-4739'
  },
  {
    href: 'https://www.linkedin.com/in/garrettarhsmith/',
    icon: <IoLogoLinkedin className={s.contactIcon} />,
    tooltip: 'linkedin.com/in/garrettarhsmith'
  },
  {
    href: '/Garrett_Smith_Resume.pdf',
    icon: <IoIosDocument className={s.contactIcon} />,
    tooltip: 'Resume'
  },
];

export default function Contact({}: Props) {
  return (
    <main className={`mainOnRoute ${s.contactMain}`}>
      <h1 className='pageTitle'>Get in touch</h1>
      <address className={s.contactList}>
        {contactItems.map((item) => (
          <ContactItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            tooltip={item.tooltip}
          />
        ))}
      </address>
      <div className={s.mobileOnlyContainer}>
        <p>garrettarhsmith@gmail.com</p>
        <p>+1(740) 601-4739</p>
        <p>linkedin.com/in/garrettarhsmith</p>
      </div>
    </main>
  )
}
