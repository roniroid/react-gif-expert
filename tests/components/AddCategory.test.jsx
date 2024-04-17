import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
    test("Debe de cambiar el valor de la caja de texto", () => {
        render(<AddCategory onNewCategory={() => {}}></AddCategory>);
        const input = screen.getAllByRole("textbox")[0];
        console.log(input);

        fireEvent.input(input, { target: { value: "Mr Satan" } });

        expect(input.value).toBe("Mr Satan");
        screen.debug();
    });

    test("Debe de llamar onNewCategory si el input tiene algún valor", () => {
        const inputValue = "Teletubbies";
        // TODO: ????

        render(<AddCategory onNewCategory={() => {}}></AddCategory>);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        screen.debug();

        expect(input.value).toBe("");
    });

    test("Debe de llamar onNewCategory al menos una vez", () => {
        const inputValue = "Teletubbies";
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        screen.debug();

        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
    });

    test("Debe de llamar onNewCategory con 'Teletubbies'", () => {
        const inputValue = "Teletubbies";
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, { target: { value: inputValue } });

        fireEvent.submit(form);

        screen.debug();

        expect(input.value).toBe("");

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('No debe de llamar el onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}></AddCategory>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
     });
});
