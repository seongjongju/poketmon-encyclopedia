import React, { useEffect, useState } from 'react';
import { CardLists, Lists } from '../../styles/Contents.styled'

const CardList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getLists = async () => {
            try{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
                const data = await response.json();            

                const detailPromises = data.results.map((poketmon) => fetch(poketmon.url)
                                        .then(response => response.json()));

                const details = await Promise.all(detailPromises);

                setList(details);
            } catch(err) {      
                console.error('상세 정보 불러오기 실패', err);
            }
        };

        getLists();
    }, []);

    const typesborderColor = (item) => {
        const mainType = item.types[0].type.name;
        if(mainType === 'grass') {
            return {border: '5px solid green'}
        } else if (mainType === 'fire') {
            return {border: '5px solid red'}
        } else if (mainType === 'water') {
            return {border: '5px solid blue'}
        } else if (mainType === 'bug') {
            return {border: '5px solid brown'}
        } else {
            return {border: '5px solid #ddd'}
        }
    }

    return (
        <CardLists>
            {list.map((item) => (
                <Lists 
                    key={item.id}
                    style={typesborderColor(item)}
                > {/* 임시, route로 연결 예정 */}
                    <div className='image-wrap'>
                        <img src={item.sprites.front_default} alt={item.name} />
                    </div>
                    <ul>
                        <li>{item.name}</li>
                        <li>Type: {item.types.map(t => t.type.name).join(', ')}</li>
                    </ul>
                </Lists>
            ))}
        </CardLists>
    );
};

export default CardList;