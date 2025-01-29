import BookList from "./BookList";
import {useState,useEffect} from'react'
// useEffect(()=>{},[]);
function BookApp(){
    // define an array of objects 
    const [booksData,setBooksData]=useState([]);

    // fetch the data once using the useEffect
    useEffect(()=>{
        // We will fetch from our local JSON Server endpoint 
        fetch('http://localhost:3000/books')
          .then((response)=>{
            return response.json()
          })
          .then((data)=>{
            setBooksData(data);
          })
          .catch((error)=>{
            console.error('Error fetching books:',error)
          });
    },[])
    // function that removes  a book from the array by id 

    const removeBook=(bookId)=>{
      // send a DELETE request to the JSON Server 
      fetch(`http://localhost:3000/books/${bookId}`,{
        method:'DELETE',
      })
      .then((response)=>{
          if(!response.ok){
          throw new Error ('Failed to delete a book ');

        }
        setBooksData((prevBooks)=>{
          return prevBooks.filter((book)=>book.id!==bookId);
        })
      })
      .catch((error)=>{
        console.error('Error deleting books:',error)
      })
    }
   
    return (
        <div>
            <h1>My Book Library</h1>
            <BookList books={booksData} onRemoveBook={removeBook} />
        </div>
    )
}
export default BookApp;