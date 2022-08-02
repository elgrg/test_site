import {Link} from 'react-router-dom';

const Notfound = () => {
    return ( 
        <div>
            <h2>This is not a valid url</h2>
            <Link to="/">Go back to homepage</Link>
        </div>
     );
}
 
export default Notfound;