import React, { PropsWithChildren } from 'react'
import s from './Card.module.css'

type Props = {
  className?: string
}

export default function Card({
  children,
  className,
}:PropsWithChildren<Props>) {
  return (
    <div
      className={`${s.card} ${s[className as keyof typeof s]}`}
    >
      {children}
    </div>
  )
}
