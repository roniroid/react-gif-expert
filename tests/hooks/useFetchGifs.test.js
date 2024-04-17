import { renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe de retornar el estado inicial', () => { 
        const {result} = renderHook(() => useFetchGifs('One Punch'));

        console.log(result);

        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

        //const {images, isLoading} = useFetchGifs();
     });
});