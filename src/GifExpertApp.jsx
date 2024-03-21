import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const INITIAL_CATEGORIES = ['Bob the builder'];

    const [categories, setCategories] = useState(INITIAL_CATEGORIES);
    console.log(categories);

    {/*const onAddCategory = (newCategory) => {
        //setCategories([...categories, newCategory]);
        setCategories(cat => [newCategory, ...cat]);
    };*/}

    const onAddCategory = (newCategory) => {
        console.log(newCategory);

        //setCategories([...categories, newCategory]);
        if (categories.includes(newCategory)) return;

        setCategories(cat => [newCategory, ...cat]);
    };

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                /*setCategories={setCategories}*/
                /*onNewCategory={event => {onAddCategory(event)}}*/
                onNewCategory={(value) => {
                    onAddCategory(value);
                }}
            />

            {/* Gif list */}
            {/*<button onClick={() => { onAddCategory("Valorant"); }}>Agregar</button>*/}
            
            {
                categories.map((category) => 
                    <GifGrid category={category} key={category}></GifGrid>
                    
                )
            }
            
            {/* Gif list */}
            {/*<button onClick={() => { onAddCategory("Valorant"); }}>Agregar</button>*/}
            {/*
            <ol>
                {categories.map((category) => 
                    <GifItem category={category} key={category}></GifItem>
                    
                )}
            </ol>
            */}

            {/* Gif item */}
        </>
    );
};
