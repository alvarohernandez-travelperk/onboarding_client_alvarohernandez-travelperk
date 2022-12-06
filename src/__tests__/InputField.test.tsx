import { cleanup, render } from '@testing-library/react';
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
  const { getByTestId  } = render(<InputField
    title="title-label"
    placeholder="placeholder"
    value="value"
    handleInput={handleInput} />);
  expect(getByTestId("input-label")).toHaveTextContent("title-label");
});

it("Displays the default value text", () => {
  const { getByTestId  } = render(<InputField
    title="title-label"
    placeholder="placeholder"
    value="value"
    handleInput={handleInput} />);
  expect(getByTestId("input-field")).toHaveDisplayValue("value");
});


