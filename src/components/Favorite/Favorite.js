import PageTitle from "../PageTitle/PageTitle";
import Card from '../Card/Card'
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/store';
import {useSelector} from 'react-redux';

const Favorite=()=>{
    const favoriteCards = useSelector(state => getFavoriteCards(state));
  console.log('favoriteCrds', favoriteCards)
    if (favoriteCards.length >0){
    return(
        <div>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
        <ul className={styles.cards}>
            {favoriteCards.map(card => <Card key={card.id} isFavorite={card.isFavorite} title={card.title}/>)}
            </ul>
            </article>
        </div>
    );}
    else{
        return (
            <div>
            <PageTitle>Favorite</PageTitle>
            <h1>No cards...</h1>
            </div>

        )

    }
}

export default Favorite;