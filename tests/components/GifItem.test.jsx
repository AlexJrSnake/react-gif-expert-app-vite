import { fireEvent, render, screen } from "@testing-library/react"
import {GifItem} from "../../src/components/GifItem"

describe('<GifItem></GifItem>', () => { 

    const title = 'Prueba';
    const url = 'https://www.tumgir.com/tag/Julia%20Katsushika'

    test('snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
     })


     test('debe mostrar la imagen con el URL indicado', () => {
        render(<GifItem title={title} url={url}/>)
        // screen.debug();
        const { src , alt } = screen.getByRole('img')
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
     })

     test('debe mostrar el titulo en el componente', () => {
        render(<GifItem title={title} url={url}/>)
        expect( screen.getByText(title) ).toBeTruthy();
     })

})