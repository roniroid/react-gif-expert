import { useState } from "react";
import PropTypes from 'prop-types'

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

        const newInputValue = inputValue && inputValue.trim();

        if (!newInputValue) return;

        if (newInputValue.length <= 1) {
            return;
        }

        //setCategories(categories => [inputValue, ...categories]);

        onNewCategory(newInputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}