import React from 'react'
import s from './Work.module.css'
import WorkItems from '@/components/WorkItems/WorkItems'
type Props = {}

export default function page({}: Props) {
  return (
    <main className='mainOnRoute'>
      <h1 className='pageTitle'>Work</h1>
      <WorkItems />
    </main>
  )
}
