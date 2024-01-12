'use client'
import React, { useState } from 'react'
import s from './WorkItem.module.css'
import { IoClose } from "react-icons/io5";


type Props = {
  title: string,
  description: string,
}

const WorkItem = ({ title, description }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={s.container}
        onClick={() => setIsModalOpen(true)}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {isModalOpen && (
        <div className={s.overlay}>
          <div className={s.modalContent}>
            <div
              className={s.topBar}
            >
              <h2>Modal</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className={s.closeButton}
              ><IoClose /></button>
            </div>
            <p>Modal content</p>
          </div>
        </div>
      )}
    </>
  )
}

export default WorkItem