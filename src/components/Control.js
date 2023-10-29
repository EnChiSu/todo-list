import { useState } from 'react';
// import Container from "react-bootstrap/Container"; 
// import Row from "react-bootstrap/Row"; 
// import Col from "react-bootstrap/Col"; 
// import Button from "react-bootstrap/Button"; 
// import InputGroup from "react-bootstrap/InputGroup"; 
// import FormControl from "react-bootstrap/FormControl"; 
// import ListGroup from "react-bootstrap/ListGroup"; 

const Control = ({onAdd}) => {
    const [inputValue, setInputValue] = useState('')
    const onChange = (e)=>{
        setInputValue(e.target.value)
    }
    const addTodo = (e)=>{
        e.preventDefault();
        
        onAdd(inputValue)
        setInputValue('')
    }

    return (
        <>
            <input
                value={inputValue}
                onChange={onChange}
            >

            </input>
            <button
                onClick={addTodo}
            >
                Add
            </button>
        </>
        
        // <InputGroup className="mb-3">
        //     <FormControl
        //     placeholder="Recipient's username"
        //     aria-label="Recipient's username"
        //     aria-describedby="basic-addon2"
        //     />
        //     <Button variant="outline-secondary" id="button-addon2">
        //     Button
        //     </Button>
        // </InputGroup>
    )

}

export default Control;
