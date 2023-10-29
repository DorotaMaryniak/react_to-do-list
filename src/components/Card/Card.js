import styles from './Card.module.scss';
import {clsx} from 'clsx';
import { useDispatch } from 'react-redux';
import {addFavorite, removeCard} from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();
 const handleOnClick= e =>{
    e.preventDefault();
    dispatch (addFavorite(props.id));
    }
  const handleRemove= e =>{
      e.preventDefault();
      dispatch (removeCard(props.id));
      }
    return (

             <li className={styles.card}>{props.title}
             <button onClick = {handleOnClick} className={styles.button} ><i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></button>
             <button onClick = {handleRemove} className = {styles.button}><i className="fa fa-trash"/></button>
             </li>
             )

  };

export default Card;