import BookList from "./BookList";
import {useState} from'react'

function BookApp(){
    // define an array of objects 
    const [booksData,setBooksData]=useState([
        {
            id: 1,
            title: '1984',
            author: 'George Orwell',
            publicationYear: 1949,
            genre: 'Dystopian',
            coverImage: '/george.jpeg',
            rating: 4.5,
          },
          {
            id: 2,
            title: 'Brave New World',
            author: 'Aldous Huxley',
            publicationYear: 1932,
            genre: 'Science Fiction',
            coverImage:'/Brave.jpg',
            rating:4.2
            
          },
          {
            id: 3,
            title: 'Fahrenheit 451',
            author: 'Ray Bradbury',
            publicationYear: 1953,
            genre: 'Science Fiction',
            coverImage: '/g.jpg',
            rating: 4.0,
          },
      
      

    ]);
    // function that removes  a book from the array by id 

    const removeBook=(bookId)=>{
        const updatedBooks= booksData.filter(book=>book.id!==bookId);
        setBooksData(updatedBooks);

    }
   
    return (
        <div>
            <h1>My Book Library</h1>
            <BookList books={booksData} onRemoveBook={removeBook} />
        </div>
    )
}
export default BookApp;