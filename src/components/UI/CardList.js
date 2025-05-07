import React, { useEffect, useState } from 'react';
import { CardLists } from '../../styles/Contents.styled'

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

    return (
        <CardLists>
            {list.map((item, index) => (
                <div key={index}>
                    <img src={item.sprites.front_default} alt={item.name} />
                    <p>{item.name}</p>
                    <p>
                        타입: {item.types.map(t => t.type.name).join(', ')}
                    </p>
                </div>
            ))}
        </CardLists>
    );
};

export default CardList;