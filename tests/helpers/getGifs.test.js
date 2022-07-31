import { fireEvent, render, screen } from "@testing-library/react"
import { getGif } from "../../src/helpers/getGifs"

describe('getGif', () => {


   test('arreglo de gifs', async () => {
      const gifs = await getGif('Chainsaw man');
      expect(gifs.length).toBeGreaterThan(0)
      expect(gifs[0]).toEqual({
         id: expect.any(String),
         title: expect.any(String),
         url: expect.any(String)
      })
   })

})