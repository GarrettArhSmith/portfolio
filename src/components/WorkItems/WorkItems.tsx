'use client'
import React, { useState, useEffect, use } from 'react'
import s from './WorkItems.module.css'
import WorkItem from '../../components/WorkItem/WorkItem'

type Props = {}

const workItems = [
  {
    id: 1,
    title: 'EXPRESS',
    jobTitle: 'Associate ECommerce Engineer',
    location: 'Columbus, Ohio',
    startDate: '08/2021',
    endDate: '08/2023',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt maxime quos cum pariatur! Quod tempora nesciunt reiciendis amet iusto, placeat vel deleniti necessitatibus labore impedit, ducimus itaque et laborum fugiat?',
    achievements: [
      `Contributed to the successful integration of the 'Save for Later' feature for the bag page, increasing conversion rates.`,
      `Successfully implemented a redesign of Bag and Checkout pages, resulting in enhanced user experience and increased conversion rates.`,
      `Revamped Product List & Search pages, expanding the grid & introducing new components for improved user experience, engagement, and control.`,
      `Enhanced checkout with 'Tender Type Promotions' feature, allowing for PLCC and other tender type specific discounts, boosting conversions and retention rates.`,
    ],
  },
  {id: 2, title: 'Item 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
  {id: 3, title: 'Item 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
];

export default function WorkItems({}: Props) {
  const [displayWorkItems, setDisplayWorkItems] = useState(workItems);

  useEffect(() => {
    window.scrollTo({left: 1000, top: 1000, behavior: 'smooth'});
    console.log(window)
  }, []);

  return (
    <div className={s.workItems}>
      {workItems.map((item) => (
        <WorkItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}