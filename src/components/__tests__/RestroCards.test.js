import { render, screen } from "@testing-library/react";
import RestroCards, { withExcellentRating } from "../RestroCards";
import MOCK_DATA from "../mock/resMock.json";
import "@testing-library/jest-dom";

it("Should load component with props", () => {
  //   console.log(MOCK_DATA);
  // we need to pass the props to the restroCards so we can create moke data for it
  render(<RestroCards resData={MOCK_DATA}></RestroCards>);
  const resName = screen.getByText("Geetha Canteen");
  expect(resName).toBeInTheDocument();
});

it("Should load component with props and suggested", () => {
  //   console.log(MOCK_DATA);
  // we need to pass the props to the restroCards so we can create moke data for it
  const RestroComponent = withExcellentRating(RestroCards);

  render(<RestroComponent resData={MOCK_DATA}></RestroComponent>);
  const resName = screen.getByText("Geetha Canteen");
  expect(resName).toBeInTheDocument();
  //   const resName = screen.getByText("Geetha Canteen");
  //   expect(resName).toBeInTheDocument();
});
