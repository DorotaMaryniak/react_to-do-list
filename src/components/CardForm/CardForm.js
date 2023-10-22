//import styles from './ColumnForm/ColumnForm.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './CardForm.module.scss'

const CardForm =  props => {
const [title, setTitle] = useState('');
const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title }, props.columnId);
     //wywolanie funkcji otrzymanej od parametru action w List, przekazuje jej inf co było w input value
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