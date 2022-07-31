import { fireEvent, render, screen } from "@testing-library/react"
import {GifExpertApp} from "../src/GifExpertApp"

describe('<GifExpertApp></GifExpertApp>', () => { 


    test('Snapshot', () => {
        const {container} = render(<GifExpertApp/>)
        expect(container).toMatchSnapshot()
    })


    test('Buscar Girf Value', () => {
        const inputValue = 'Saitama'
        render(<GifExpertApp/>)
        const input = screen.getByRole('textbox'); 
        fireEvent.input( input , { target: {value: inputValue}} )
        expect( input.value ).toBe('Saitama')
    })

})