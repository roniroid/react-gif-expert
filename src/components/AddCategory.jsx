import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState();

    const onInputChange = ({target}) => {
        console.log(target);
        console.log(target.value);
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(event);
        console.log(inputValue);

        const newInputValue = inputValue.trim();

        if (newInputValue.length <= 1) {
            return;
        }

        //setCategories(categories => [inputValue, ...categories]);

        onNewCategory(newInputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};