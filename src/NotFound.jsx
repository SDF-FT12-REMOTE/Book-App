import { Link } from "react-router-dom";
function NotFound(){
    return(
        <div>
            <h2>OOPS!! Page not Found</h2>
            <Link to="/">Go Back Home</Link>
        </div>
    )
}
export default NotFound;