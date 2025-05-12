import styled from 'styled-components';

export const Section = styled.section`
    padding: 80px 0;
`;

export const SearchForm = styled.form`
    max-width: 500px;
    height: 40px;
    margin: 0 auto 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const SearchInput = styled.input`
    width: calc(100% - 110px);
    height: 100%;
    padding-left: 20px;
    box-sizing: border-box;
    out-line: none;
    border: 1px solid #ddd;
    border-radius: 40px;
`;

export const SearchButton = styled.button`
    width: 100px;
    height: 100%;
    border: none;
    border-radius: 40px;
    cursor: pointer;
`;

export const CardLists = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
`;

export const Lists = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    border: 1px solid #ddd;
    position: relative;
    transition: border 0.3s;

    & .image-wrap {
        width: fit-content;
        height: fit-content;
        border: 1px solid #ddd;
        border-radius: 50%;
        overflow: hidden;
    }

    &:before {
        position: absolute;
        content: '';
        top: 0; 
        left: 0;
        width: 100%;
        height: 100%;
        border: ${(props) => props.hoverColor};
        box-sizing: border-box;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover:before {
        opacity: 1;
    }
`;
