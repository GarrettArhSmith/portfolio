import React from 'react'
import s from './Work.module.css'
import WorkItem from '../../components/WorkItem/WorkItem'

type Props = {}

const workItems = [
  {id: 1, title: 'EXPRESS', description: 'I worked here for 2 years developing the site in React.'},
  {id: 2, title: 'Item 2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
  {id: 3, title: 'Item 3', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'},
];

export default function page({}: Props) {

  return (
    <main className='mainOnRoute'>
      <h1 className='pageTitle'>Work</h1>
      <div
        className={s.workItems}
      >
        {workItems.map((item) => (
          <WorkItem
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </main>
  )
}
