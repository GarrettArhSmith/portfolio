'use client'
import React from 'react'
import s from './CardsNav.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Card from '../Card/Card'

type Props = {
  routes: {
    path: string
    name: string
    icon: React.ReactNode
  }[]
}

export default function CardsNav({routes}: Props) {
  const pathname = usePathname();

  return (
    <nav className={s.cardsNav}>
      {routes.map(({ path, name, icon }) => (
        <Link
          key={name}
          href={path}
          className={`
            ${s.navLink}
            ${s[name]}
          `}>
          <Card className={pathname === path ? 'active' : undefined}>
            {name[0].toUpperCase() + name.slice(1)}
            {icon}
          </Card>
        </Link>
      ))}
    </nav>
  )
}
