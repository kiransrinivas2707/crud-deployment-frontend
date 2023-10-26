import {Link} from "react-router-dom";

function Nav(){
    return (
        <nav class="navbar bg-warning mb-5 mx-auto" >
            <Link to="/" class="navbar-brand" style={{fontWeight:"bold",paddingLeft:"15px"}}>CRUD operations</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link text-primary" style={{fontWeight:"bold"}}>Create student</Link>
                <Link to="/student-list" class="nav-link text-primary" style={{fontWeight:"bold"}}>Student List</Link>
            </div>
        </nav>
    )
}
export default Nav;