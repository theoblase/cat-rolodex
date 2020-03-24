import React from 'react';
import './card.styles.css';
export const Card = props => (
    <div className='card-container'>
        <div className='card'>
                <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=150x150`}/>
                </div>
       <h2> {props.monster.name} </h2> 
       <p>{props.monster.name}</p>
       <p>{props.monster.email}</p>
    </div>
);
