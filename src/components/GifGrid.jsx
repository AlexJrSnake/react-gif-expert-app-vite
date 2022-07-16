import React, {useEffect, useState} from 'react'
// import {getGif} from '../helpers/getGifs'
import {GifItem} from '../components/GifItem'
import {useFetchGifs} from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {

    const { imagenes, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && <h2>Cargando...</h2>
            }

            <div className="card-grid">
                { 
                    imagenes.map( (element, index) => {
                        return  <GifItem key={element.id} 
                                         {...element}> 
                                </GifItem>
                    }) 
                }            
            </div>
        </>
    )
}
