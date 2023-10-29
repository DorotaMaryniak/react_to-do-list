//import styles from './ColumnForm/ColumnForm.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';


const ListForm =  props => {

const [title, setTitle] = useState('');
const [description, setDescription]=useState('');
const dispatch = useDispatch();
const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({title,description}));
    setTitle('');
    setDescription('');
}

return(
<form onSubmit={handleSubmit} className= {styles.columnForm}>
    Title: <TextInput value = {title} onChange={e => setTitle(e.target.value)}/>
    Description: <TextInput value = {description} onChange={e => setDescription(e.target.value)}/>
    <Button>Add list</Button>
</form>
);
};
export default ListForm;