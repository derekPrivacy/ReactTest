import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

describe('Render Without Crash', () => {
    it("reactTest1", () => {
        const div = document.createElement("div");
        ReactDom.render(<Button></Button>, div)
    })
});

describe('It render correctly', () => {
    it("reactTest2", () => {
        const { getByTestId } = render(<Button label="click me"></Button>)
        expect(getByTestId('button')).toHaveTextContent("click me")
    })
})