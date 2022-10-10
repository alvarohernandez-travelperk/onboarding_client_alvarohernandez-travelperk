import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import ListIngredients from '../Components/ListIngredients';
import { BrowserRouter } from 'react-router-dom';

const setIngredients = jest.fn();
const mockIngredients = ["tomato", 'pasta', "carrots", "parmesan", "meat", "celery"]

afterEach(cleanup);

it("Snapshot Test ListIngredients Component", () => {
  const { asFragment } = render(<ListIngredients
    ingredients={mockIngredients}
    setIngredients={setIngredients} />,  {wrapper: BrowserRouter});
  expect(asFragment).toMatchSnapshot();
});

it("Test ListIngredients Texts", () => {
  const { getByTestId } = render(<ListIngredients
    ingredients={mockIngredients}
    setIngredients={setIngredients} />,  {wrapper: BrowserRouter});
    expect(getByTestId("add-ingredient-button")).toBeVisible();
    expect(screen.getAllByTestId("ingredient-item")).toHaveLength(mockIngredients.length);
});