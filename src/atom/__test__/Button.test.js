import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';


it("reactTest1", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})