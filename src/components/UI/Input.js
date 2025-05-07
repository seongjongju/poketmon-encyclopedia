import React, { useState } from 'react';
import { SearchForm, SearchInput, SearchButton } from '../../styles/Contents.styled';

const Input = () => {
    const [input, setInput] = useState('');

    const inputChabged = (event) => {
        setInput(event.target.value);
    };

    return (
        <SearchForm>
            <SearchInput 
                type='text'
                placeholder='검색어를 입력해주세요.'
                value={input}
                onChange={inputChabged}
            />
            <SearchButton>검색</SearchButton>
        </SearchForm>
    );
};

export default Input;