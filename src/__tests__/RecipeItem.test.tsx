import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RecipeItem from '../Components/RecipeItem';

const fetchData = jest.fn();
const mockRecipe = {
  title: "Mock Recipe",
  description: "Mock description",
  id: 0,
  ingredients: []
}

afterEach(cleanup);

it("Snapshot Test RecipeItem Component", () => {
  const { asFragment } = render(<RecipeItem
    recipe={mockRecipe}
    fetchData={fetchData} />,  {wrapper: BrowserRouter});
  expect(asFragment).toMatchSnapshot();
});

it("Test RecipeItem Texts", () => {
  const { getByTestId } = render(<RecipeItem
    recipe={mockRecipe}
    fetchData={fetchData} />,  {wrapper: BrowserRouter});
    expect(getByTestId("recipe-item-title")).toHaveTextContent(mockRecipe.title);
    expect(getByTestId("recipe-item-description")).toHaveTextContent(mockRecipe.description);
});