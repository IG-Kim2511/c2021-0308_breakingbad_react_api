import React from 'react'
import CharItem from './CharItem.js'

const CharGrid = ({Items,Isloading}) => {

    // 6 Tenary operator, map(()=>(  JSX ))

    return Isloading ?

    <h1>loading</h1> :

    <section className="cards">
        
        {Items.map((a)=>(

            <CharItem key={a.char_id} item={a}>{a.name}</CharItem>
            
        ))}

    </section>
}

export default CharGrid

