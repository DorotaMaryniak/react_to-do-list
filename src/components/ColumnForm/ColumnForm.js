//import styles from './ColumnForm/ColumnForm.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './ColumnForm.module.scss'

const ColumnForm =  props => {
const [title, setTitle] = useState('');
const [icon, setIcon]=useState('');
const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title, icon: icon });
    setTitle('');
    setIcon('');
}

return(
<form onSubmit={handleSubmit} className= {styles.columnForm}>
    Title: <TextInput value = {title} onChange={e => setTitle(e.target.value)}/>
    Icon: <TextInput value = {icon} onChange={e => setIcon(e.target.value)}/>
    <Button>Add column</Button>
</form>
);
};
export default ColumnForm;