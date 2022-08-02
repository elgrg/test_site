import { Link } from "react-router-dom";

const Delete = () => {
    return (  
        <div>
            <h4>Which block you want to delete?</h4>
            <form action="delete" method="post">
                <label>Select block:</label><br />
                <input type="checkbox" value="1" />Home Block<br />
                <input type="checkbox" value="2" />First Block of body<br />
                <input type="checkbox" value="3" />Second Block of body<br />
                <input type="submit" />
            </form>
            <br />
            <Link to="/">Go back to home</Link>
        </div>
    );
}
 
export default Delete;