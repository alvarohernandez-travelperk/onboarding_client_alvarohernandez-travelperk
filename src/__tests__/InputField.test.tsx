import React from 'react';
import { render, cleanup } from '@testing-library/react';
import InputField from '../Components/InputField';

const handleInput = jest.fn();

afterEach(cleanup);

it("Snapshot Test Input Component", () => {
  const { asFragment } = render(<InputField
    title="title"
    placeholder="placeholder"
    value="value"
    handleInput={handleInput} />);
  expect(asFragment).toMatchSnapshot();
});

it("Renders right label text", () => {
  const { getByTestId, getByText  } = render(<InputField
    title="title-label"
    placeholder="placeholder"
    value="value"
    handleInput={handleInput} />);
  expect(getByTestId("input-label")).toHaveTextContent("title-label");
});


