import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [imagenes, setimagenes] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        getGif(category).then(newImages => {
            setimagenes(newImages)
            setisLoading(false)
        });
        return () => {
        }
    }, [category])


    return {
        imagenes,
        isLoading
    }

}
