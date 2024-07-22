import "./styles.css";


// Vide documentação de referência para SyntheticEvent
// https://pt-br.legacy.reactjs.org/docs/events.html

// Vide documentação para Manipulando eventos
// https://pt-br.legacy.reactjs.org/docs/handling-events.html



export const TextInput = ({ searchValue, handleChange}) => {
    return (
        <input 
            className="text-input"
            onChange={handleChange}
            value={searchValue}
            type="search"
            placeholder="Type your search"
        />
    );
}