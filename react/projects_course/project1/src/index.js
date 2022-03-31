import React from 'react';
import { createElement } from 'react';
import ReactDom from 'react-dom';


// CSS
import './index.css'

// Setup vars
const author = 'Amelia Hepworth'
const title = 'I Love You to the Moon and Back'
const img = "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX258_BO1,204,203,200_.jpg"

function BookList() {
    return (
        <section className='bookList'>
            <Book/>
        </section>
    )   
}


const Book = (props) => {
        return (
        <article className='book'>
            <img 
                src = {img}
                alt = ''
            />
            <h1>{title}</h1>
            <h3>{author}</h3>
        </article>
    )
}

// arrow function
// const BookList = () => {
//     return  React.createElement('h4', {}, "This is my first react arrow component")
// }

ReactDom.render(<BookList />, document.getElementById('root'))