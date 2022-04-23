import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories(['HunterXHunter', ...categories]);
    //     // setCategories( cats => [...cats, 'HunterXHunter']);
    // }
    
    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map( (category, i) => {
                        return <GifGrid
                                    key={category}    
                                    category={category}
                                />
                    })
                }
            </ol>
        </>
  )
}
