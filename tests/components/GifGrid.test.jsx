import { fireEvent, render, screen } from "@testing-library/react"
import {GifGrid} from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('<GifGrid></GifGrid>', () => { 

    const category = 'Chainsaw man'

    test('loading', () => {

        useFetchGifs.mockReturnValue({
            imagenes: [],
            isLoading: true
        })

        render(<GifGrid category={ category }/>)
        expect( screen.getByText('Cargando...') )
        expect( screen.getByText(category) )
    })

    test('useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'AAAAAA',
                url: 'CXZXCXVVX'
            },
            {
                id: 'VVVVV',
                title: 'VVVVVVVVVVVVVX',
                url: 'ACXZFE'
            }
        ]

        useFetchGifs.mockReturnValue({
            imagenes: gifs,
            isLoading: true
        })

        render(<GifGrid category={ category }/>)
        expect( screen.getAllByRole('img').length ).toBe(2)

    })
})