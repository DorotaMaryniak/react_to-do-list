//import styles from './ColumnForm/ColumnForm.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm =  props => {
const [title, setTitle] = useState('');
const dispatch = useDispatch();
const handleSubmit = e => {
    e.preventDefault();
    dispatch(addCard( {title, columnId:props.columnId}));
    setTitle('');
    }

return(
<form onSubmit={handleSubmit} className= {styles.cardForm}>
    <TextInput value = {title} onChange={e => setTitle(e.target.value)}/>
    <Button>Add card</Button>
</form>
);
};
export default CardForm;