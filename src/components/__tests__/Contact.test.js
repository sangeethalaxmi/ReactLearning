import ContactUs from "../ContactUs";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
// to group test cases we can use describe to group test cases
describe("Test cases for rendering Contact us", () => {
  // both test and it are same
  it("Check whether contact component loaded", () => {
    // render the component
    render(<ContactUs />);
    //   we will use screen to check whether the rendered component have particular element
    //   "@babel/preset-react - is trying to convert jsx to html for testing
    // this gets the rendered dom and try to se whether heading present ..it works for only one element if there are many elemnts it fails
    const button = screen.getByRole("heading");
    //
    //   TypeError: expect(...).toBeInDocument is not a function --> trying to search whether button is present in document .. the error is because jest-dom to help support the testing
    expect(button).toBeInTheDocument();
  });

  test("Check whether the button is present", () => {
    // render the component
    render(<ContactUs />);
    //   we will use screen to check whether the rendered component have particular element
    //   "@babel/preset-react - is trying to convert jsx to html for testing
    // the string passing is case senstitve it fails if exact match not present
    const button = screen.getByText("Submit");
    //
    //   TypeError: expect(...).toBeInDocument is not a function --> trying to search whether button is present in document .. the error is because jest-dom to help support the testing
    expect(button).toBeInTheDocument();
  });

  test("Check whether contact us component have 2 input field", () => {
    // render the component
    render(<ContactUs />);
    //   we will use screen to check whether the rendered component have particular element
    //   "@babel/preset-react - is trying to convert jsx to html for testing
    // the string passing is case senstitve it fails if exact match not present
    const textboxes = screen.getAllByRole("textbox"); // it returns the object which is result of createElement
    //
    //   TypeError: expect(...).toBeInDocument is not a function --> trying to search whether button is present in document .. the error is because jest-dom to help support the testing
    expect(textboxes.length).toBe(2);
  });
});
