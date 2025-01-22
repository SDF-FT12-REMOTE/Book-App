import BookItem from "./BookItem"

function BookList(props){
    const {books,onRemoveBook}=props;
    return (
        <div>
        <h2>List of Books </h2>
        {books.map(book=>(
            <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            publicationYear={book.publicationYear}
            genre={book.genre}
            coverImage={book.coverImage}
            rating={book.rating}
            onRemoveBook={onRemoveBook}/>
        ))}
    </div>
    )
}
export default BookList