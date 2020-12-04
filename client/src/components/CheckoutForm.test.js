import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

const testValues = {
    firstName: 'Cameron',
    lastName: 'Mirza',
    address: '123 Buttkick Lane',
    city: 'Portland',
    state: 'Oregon',
    zip: '97201'
}

test("form header renders", () => {
    render (<CheckoutForm/>)
});

test("form shows success message on submit with form details", () => {

    // arrange
    render (<CheckoutForm/>)

    // act
    const firstNameInput = screen.getByTestId('firstName');
    const lastNameInput = screen.getByTestId('lastName');
    const addressInput = screen.getByTestId('address');
    const cityInput = screen.getByTestId('city');
    const stateInput = screen.getByTestId('state');
    const zipInput = screen.getByTestId('zip');

    userEvent.type(firstNameInput, testValues.firstName);
    userEvent.type(lastNameInput, testValues.lastName);
    userEvent.type(addressInput, testValues.address);
    userEvent.type(cityInput, testValues.city);
    userEvent.type(stateInput, testValues.state);
    userEvent.type(zipInput, testValues.zip);

    const submitButton = screen.getByTestId('button');
    userEvent.click(submitButton);

    // assert
    const successMessage = screen.getByTestId('successMessage');
    expect(successMessage).toBeInTheDocument;
});
