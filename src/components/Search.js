import React,{useState} from 'react'

const Search = () => {

    const [Text, setText] = useState('')

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
