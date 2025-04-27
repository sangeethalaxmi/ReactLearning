import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mock/cartMock.json";
import "@testing-library/jest-dom"; //this holds toBeInTheDocument()
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});
it("Should load restaurant menu component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const restroName = screen.getByText("A2B - Adyar Ananda Bhavan");
  expect(restroName).toBeInTheDocument();

  const accordHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordHeader);
  // asset whether there are 20 items in recomended
  const items = screen.getAllByTestId("items");
  expect(items.length).toBe(20);
  //   this throw error but need getallbyrole
  const addBtn = screen.getAllByRole("button", { name: "ADD" });
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  fireEvent.click(addBtn[0]);
  //   after clicking button we need to check whether header changed -- we can add header component too
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();
  const clearCart = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCart);
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();
});
