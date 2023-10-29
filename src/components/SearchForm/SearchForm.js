import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString, getSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchString = useSelector(getSearchString);
    const[searchValue, setSearchValue] = useState(searchString);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('eventtarget',e.target);
        dispatch(updateSearchString(searchValue));
            }
    return (

        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder = "Search..." value = {searchValue} onChange={e => setSearchValue(e.target.value)} />
            <Button>
             <span className="fa fa-search" />
            </Button>

        </form>
    );
};

export default SearchForm;