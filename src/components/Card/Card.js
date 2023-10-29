import styles from './Card.module.scss';
import {clsx} from 'clsx';
import { useDispatch } from 'react-redux';
import {addFavorite} from '../../redux/store';
const Card = props => {
  const dispatch = useDispatch();
 const handleOnClick= e =>{
    e.preventDefault();
    dispatch (addFavorite(props.id));
    }
    return (

             <li className={styles.card}>{props.title}
             <button onClick = {handleOnClick} ><i className={clsx("fa fa-star-o", props.isFavorite && styles.isFavorite)}></i></button>
             </li>
             )

  };

export default Card;