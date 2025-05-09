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
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    & img {
        width: 100%;
        border-bottom: 1px solid #ddd;
    }

    & ul {
        padding: 15px;
    }

    & ul li {
        text-align: center;
        margin-bottom: 10px;
    }

    & ul li:last-child {
        margin-bottom: 0;
    }
`