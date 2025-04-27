import Body from "../Body";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mock/restSearchMock.json";
import { BrowserRouter } from "react-router-dom";
// integrated testing
// we test the integration of different component with search function
beforeAll(() => {
  console.log("before all test case run");
});
beforeEach(() => {
  console.log("before each test case run");
});
afterAll(() => {
  console.log("after all test case run");
});
afterEach(() => {
  console.log("after each test case run");
});
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
it("Should search for particular item", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: "search" });
  //   to get input that dont hav ename or placeholder or any unique value we can use data-testid
  const inputElement = screen.getByTestId("search");
  fireEvent.change(inputElement, { target: { value: "burger" } }); // in second parameter we are setting trigger value manually since e is from browser api
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});
it("Should get top rated restro", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name: /top rated restorent/ });
  //   to get input that dont hav ename or placeholder or any unique value we can use data-testid
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(8);
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(3);
});
