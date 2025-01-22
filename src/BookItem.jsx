function BookItem(props){
    const {id,
        title,
        author,
        publicationYear,
        genre,
        coverImage,
        rating,
        onRemoveBook}=props;
    const handleRemove= ()=>{
        onRemoveBook(id);
    }
    return(
        <div>
            <img src={coverImage} alt={`Cover of${title}`} style={{width:'120px',height:'auto'}}/>
            <h3>{title}</h3>
            <h4>{author}</h4>
            <p>Published in {publicationYear}</p>
            <p>Genre:{genre}</p>
            <p>Rating:{rating}</p>
            <button onClick={handleRemove}>Remove Book</button>

        </div>
    )
}
export default BookItem