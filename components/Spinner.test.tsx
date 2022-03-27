import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Spinner } from "./Spinner";

test("loads and displays greeting", async () => {
  render(<Spinner />);

  const spinnerElement = screen.getByTestId("spinner");

  expect(spinnerElement).toBeInTheDocument();
});
