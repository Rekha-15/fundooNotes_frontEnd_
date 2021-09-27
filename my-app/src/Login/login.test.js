/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from '../Login/login';

it("should give correct title when login page rendered", () => {
    const { getByTestId } = render(<Login/>);
    const title = getByTestId("title");
    expect(title).toHaveTextContent("FundooNotes");
  });

  it("should give correct header when login page rendered", () => {
    const { getByTestId } = render(<Login />);
    const header = getByTestId("login");
    expect(header).toHaveTextContent("Sign in");
  });

  it("should check header when wrong header is given", () => {
    const { getByTestId } = render(<Login />);
    const header = getByTestId("login");
    expect(header).not.toHaveTextContent("sign in");
  });


it('givenTestIdElement_WhenRenderedLogin_ShouldContainHeaderWithExpectedInputElements',() => {
    const {getByTestId} = render(<Login/>);
     const form = getByTestId('form');
    const submit = getByTestId('submit');
    const emailInput = getByTestId('email');
    const password = getByTestId('password');

    // expect(form).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(password).toBeRequired;
    expect(emailInput).toBeRequired;
    expect(emailInput).toHaveErrorMessage;
})