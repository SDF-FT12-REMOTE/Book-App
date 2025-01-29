import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function BookDetails(){
    const {id}=useParams();
    const [book,setBook]=useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3000/books/${id}`)
        .then((res)=>res.json())
        .then((data)=>setBook(data))
        .catch((error)=>{
            console.error('Error fetching Book details:',error);
        })

    },[id]);
    if (!book){
        return <div>Loading Books Details...</div>
    }
    
    return(
        <div>
            <h2>Book Details</h2>
            <img src={book.coverImage} alt={`Cover of${book.title}`} style={{width:'120px',height:'auto'}}/>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>Published in {book.publicationYear}</p>
            <p>Genre:{book.genre}</p>
            <p>Rating:{book.rating}</p>

        </div>

        
    )
}
export default BookDetails