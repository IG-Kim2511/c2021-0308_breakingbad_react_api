import React from 'react'

const CharGrid = ({Items,Isloading}) => {

    // 6 Tenary operator, map(()=>(  JSX ))
    
    return Isloading ?

    <h1>loading</h1> :

    <section className="cards">
        
        {Items.map((a)=>(

            <h1>{a.name}</h1>
            
        ))}

    </section>
}

export default CharGrid

