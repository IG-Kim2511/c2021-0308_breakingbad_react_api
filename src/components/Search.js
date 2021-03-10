import React,{useState} from 'react'

const Search = ({getQuery}) => {

    const [Text, setText] = useState('')

    const onChange = (q)=>{
        setText(q)
        getQuery(q)
    }

    return (
        <section className="search">

            <form>
                <input type="text" className="form-control" placeholder="search characters" value={Text} onChange={(e) => setText(e.target.value)}
                ></input>
            </form>
            
        </section>
    )
}

export default Search
