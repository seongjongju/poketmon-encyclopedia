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

    const typeToKorean = (type) => {
        const typeMap = {
            normal: '노말',
            fire: '불꽃',
            water: '물',
            grass: '풀',
            electric: '전기',
            ice: '얼음',
            fighting: '격투',
            poison: '독',
            ground: '땅',
            flying: '비행',
            psychic: '에스퍼',
            bug: '벌레',
            rock: '바위',
            ghost: '고스트',
            dragon: '드래곤',
            dark: '악',
            steel: '강철',
            fairy: '페어리'
        };

        return typeMap[type] || type;
    };

    const nameToKorean = (name) => {
        const nameMap = {
            bulbasaur: '이상해씨',
            ivysaur: '이상해풀',
            venusaur: '이상해꽃',
            charmander: '파이리',
            charmeleon: '리자드',
            charizard: '리자몽',
            squirtle: '꼬부기',
            wartortle: '어니부기',
            blastoise: '거북왕',
            pikachu: '피카츄',
            meowth: '나옹',
            psyduck: '고라파덕',
            caterpie: '캐터피',
            metapod: '단데기',
            butterfree: '버터플',
            weedle: '뿔충이',
            kakuna: '딱충이',
            beedrill: '독침붕',

        };

        return nameMap[name] || name;
    };

    const typesborderColor = (item) => {
        const mainType = item.types[0].type.name;
        if(mainType === 'grass') {
            return '2px solid green'
        } else if (mainType === 'fire') {
            return '2px solid red'
        } else if (mainType === 'water') {
            return '2px solid blue'
        } else if (mainType === 'bug') {
            return '2px solid brown'
        } else {
            return '1px solid #ddd'
        }
    }

    return (
        <CardLists>
            {list.map((item) => (
                <Lists 
                    key={item.id}
                    hoverColor={typesborderColor(item)}
                > {/* 임시, route로 연결 예정 */}
                    <div className='image-wrap'>
                        <img src={item.sprites.front_default} alt={item.name} />
                    </div>               
                    <div className='text-wrap'>
                        <p>{nameToKorean(item.name)}</p>
                        <p>{item.types.map((t, index) => (
                            <span key={index}>{typeToKorean(t.type.name)}</span>
                            ))}
                        </p>
                    </div>                
{/*                     <Number>No.{item.id}</Number> */}
                </Lists>
            ))}
        </CardLists>
    );
};

export default CardList;