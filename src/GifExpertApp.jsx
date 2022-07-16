import React, { useState } from 'react'
import { GifGrid, AddCategory } from './components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['HunterXHunter'])

    const onAddCategory = (NewValue) => {

        if (categories.includes(NewValue)) {
            return;
        }

        setCategories([NewValue,...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={onAddCategory}
            />
            { 
                categories.map( (element, index) => {
                    return <GifGrid key={element} category={element}></GifGrid>
                }) 
            }            
        </>
    )


}
