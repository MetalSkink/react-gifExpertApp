import React, { useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = (e)=>{
    //     // setCategories([...categories, 'Digimon']);
    //     setCategories(cats => [...cats, 'Digimon']);
    // }


    return (
        <>
          <h1>GifExpertApp</h1>
          <AddCategory setCategories={setCategories}/>
          <hr></hr>
          
          <ol>
              {
                  categories.map(category=>
                    <GifGrid 
                        category={category}
                        key={category}
                    />
                  )
              }
          </ol>
        </>
    )
}

