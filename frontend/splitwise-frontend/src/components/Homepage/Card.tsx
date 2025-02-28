import {cardInfo} from '../../interfaces/models'


export default function Card(props: cardInfo) {

    return <article>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.img}></img>
    </article>

}