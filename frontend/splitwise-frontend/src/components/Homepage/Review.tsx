
import { reviewInfo } from "../../interfaces/models"

export default function Review({review, reviewer}: reviewInfo) {

    return <article>
        <p>{review}</p>
        <p>{reviewer}</p>
    </article>

}