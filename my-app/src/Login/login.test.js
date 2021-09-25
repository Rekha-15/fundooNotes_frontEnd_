import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Login from "./login";

describe("Login page", () => {
    it('should give correct header when login page renderd', () => {
        const { getByTestId } =  render(<Login/>);
        const h2 = getByTestId("login");
        expect(h2).toBeTruthy("Sign in");
    });

    
})