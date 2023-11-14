'use client'
import React, { useState } from 'react'
import s from './ContactItem.module.css'

type Props = {
  href: string,
  icon: React.ReactNode,
  tooltip: string,
}

export default function ContactItem({href, icon, tooltip}: Props) {
  const [hover, setHover] = useState(false)

  return (
    <div className={s.contactItem}>
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {icon}
      </a>
      {hover && <div className={s.toolTip}>{tooltip}</div>}
    </div>
  )
}