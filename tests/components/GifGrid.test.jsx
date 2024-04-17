import { GifGrid } from '../../src/components/GifGrid'
import { render, screen } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs'; '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}></GifGrid>);
        screen.debug();
        expect(screen.getAllByText('Cargando...'));
        expect(screen.getAllByText(category));
     });

     test('Debe de mostrar items cuando se cargan las imágenes con el useFetchGifs', () => { 
        const gifs = [
            {
                id:     'ABC',
                title:  'Saitama',
                url:    'https://www.google.com'
            },
            {
                id:     '123',
                title:  'Goku',
                url:    'https://www.google.com'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category}></GifGrid>);

        screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);
      });
 });