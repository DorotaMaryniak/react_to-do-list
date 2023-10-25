import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
    let string ='';

    const dispatch = useDispatch();
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('eventtarget',e.target);
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: string} );
            }
    return (

        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder = "Search..." onChange={e => string=e.target.value} />
            <Button>
             <span className="fa fa-search" />
            </Button>

        </form>
    );
};

export default SearchForm;