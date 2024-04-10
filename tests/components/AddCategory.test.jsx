import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => { 
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={() => {}}></AddCategory>);
        const input = screen.getAllByRole('textbox')[0];
        console.log(input);

        fireEvent.input(input, {target: {value: 'Mr Satan'}});

        expect(input.value).toBe('Mr Satan');
        screen.debug();
    });
});
