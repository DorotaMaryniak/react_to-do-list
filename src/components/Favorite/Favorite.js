import PageTitle from "../PageTitle/PageTitle";
import Card from '../Card/Card'
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/store';
import {useSelector} from 'react-redux';

const Favorite=()=>{
    const favoriteCards = useSelector(state => getFavoriteCards(state));
    return(
        <div>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
        <ul className={styles.cards}>
            {favoriteCards.map(card => <Card key={card.id} title={card.title}/>)}
            </ul>
            </article>
        </div>
    )
}

export default Favorite;