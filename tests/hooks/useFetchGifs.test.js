import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('useFetchGifs', () => {


    test('useFetchGifs estado inicial', async () => {
        const { result } = renderHook(() => useFetchGifs('Chainsaw man'))
        const { imagenes, isLoading } = result.current

        expect(imagenes.length).toBe(0)
        expect(isLoading).toBe(true)
    })


    test('useFetchGifs arreglo de imagenes y loading false', async () => {
        const { result } = renderHook(() => useFetchGifs('Chainsaw man'))
        await waitFor(
            () => {
                expect(result.current.imagenes.length).toBeGreaterThan(0)
            }
        )
        const { imagenes, isLoading } = result.current
        expect(imagenes.length).toBeGreaterThan(0)
        expect(isLoading).toBe(false)
    })

})