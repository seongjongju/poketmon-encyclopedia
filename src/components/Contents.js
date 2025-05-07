import { Inner } from '../styles/Common.styled';
import { Section } from '../styles/Contents.styled';
import CardList from './UI/CardList';
import Input from './UI/Input';

const Contents = () => {
    return (
        <Section>
            <Inner>
                <Input />
                <CardList />
            </Inner>
        </Section>
    );
};

export default Contents;