import { Link } from "react-router-dom";


export default function Error() {

    return <section>
        <p>And... you found nothing</p>
        <Link to='/'><a>Click to return to homepage</a></Link>
    </section>

}