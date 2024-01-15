'use client'
import React, { useState } from 'react'
import s from './WorkItem.module.css'
import { IoClose } from "react-icons/io5";


type Props = {
  item: {
    id: number,
    title?: string,
    jobTitle?: string,
    description?: string,
    achievements?: string[],
    location?: string,
    startDate?: string,
    endDate?: string,
  }
}

const WorkItem = ({ item: { achievements, jobTitle, title, description, location, startDate, endDate } }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={s.container}
        onClick={() => setIsModalOpen(true)}
      >
        <h1>{title}</h1>
      </div>
      {isModalOpen && (
        <div className={s.overlay}>
          <div className={s.modalContent}>
            <div
              className={s.topBar}
            >
              <h2>{title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className={s.closeButton}
              ><IoClose /></button>
            </div>
            <p>{location} • {startDate} - {endDate}</p>
            <h3>{jobTitle}</h3>
            <p>{description}</p>
            <ul>
              {achievements && achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default WorkItem