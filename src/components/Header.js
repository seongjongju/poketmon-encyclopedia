import React from 'react';
import { Headers, Logo, Gnb, OneDepth } from '../styles/Header.styled'
import { Inner } from '../styles/Common.styled';

const Header = () => {
    return (
        <Headers>
            <Inner>
                <Logo src="/images/logo.png"alt="" />
                <Gnb>
                    <OneDepth>ooo</OneDepth>
                    <OneDepth>ooo</OneDepth>
                    <OneDepth>ooo</OneDepth>
                </Gnb>
            </Inner>
        </Headers>
    );
};

export default Header;