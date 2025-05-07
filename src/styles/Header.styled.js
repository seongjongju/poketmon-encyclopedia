import styled from 'styled-components';

export const Headers = styled.header`
    background: #fff;
    height: 100px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Logo = styled.img`
    display: block;
`;

export const Gnb = styled.ul`
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
`;

export const OneDepth = styled.li`
    width: calc(100% / 4);
    text-align: center;
    line-height: 100px;
`;