'use client'
import React, { useEffect, useState } from 'react'
import s from './Cursor.module.css'

type Props = {}

export default function Cursor({}: Props) {
  const [ position, setPosition ] = useState({ x: 0, y: 0 })

  const updatePosition = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  const style = {
    top: position.y,
    left: position.x,
    transform: "translate(-50%, -50%)"
  }

  return (
    <>
      {/* <div className={s.cursorOuter} style={style}></div> */}
      <div className={s.cursorInner} style={style}></div>
    </>
  )
}