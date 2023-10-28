import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns} from '../../redux/store';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';
// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

const List = () => {
const columns = useSelector(columns => getColumnsByList(columns,1));
const listData = useSelector (lists=> getListById(lists,1));

return(
 <div className={styles.list}>
    <header className = {styles.header}>
    <h2 className={styles.title}>{listData.title}</h2>
    </header>
    <p className={styles.description}>{listData.description}</p>

    <section className={styles.columns}>
    {columns.map(column => <Column key={column.id} {...column}/>)}
    </section>

   <ColumnForm/>
</div>
 );
};

export default List;