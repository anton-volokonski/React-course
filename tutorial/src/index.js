import React from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'

function BookList() {
    return (
        <section className='block-list'>
            {books.map((obj) => {
                return <Book key={obj.id} bookObj={obj} />
            })}
        </section>
    )
}

const Book = (props) => {
    const {imgLink, title, description} = props.bookObj
    return (
        <article className='block-item'>
            <img alt='' src={imgLink} />
            <h4 style={{color:'chocolate', marginTop:'0.25rem'}}>{title}</h4>
            <p>{description}</p>
        </article>
    )
}

const books = [
    {
        id: 1,
        imgLink: 'https://www.apple.com/ru/safari/images/overview/privacy_hero__fn3khpbm736u_small_2x.png',
        title: 'iMac',
        description: 'very good device'
    },
    {
        id: 2,
        imgLink: 'https://www.apple.com/ru/safari/images/overview/performance_hero__b0mm4zgtpeqa_small_2x.jpg',
        title: 'Macbook',
        description: 'must have one'
    },
    {
        id: 3,
        imgLink: 'https://files.foxtrot.com.ua/PhotoNew/img_0_82_85_1.jpg',
        title: 'Grill',
        description: 'not a laptop'
    }
]

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<BookList />);