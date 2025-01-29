import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BookApp from './BookApp';
import BookDetails from './BookDetails';
import NotFound from './NotFound';


function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BookApp/>}/>
                <Route path="/books/:id" element={<BookDetails/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )

}
export default AppRouter