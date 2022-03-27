import "whatwg-fetch";
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from ".";

const server = setupServer(
  rest.get("https://reqres.in/api/users?page=2", (req, res, ctx) => {
    return res(
      ctx.json({
        data: [
          {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
            avatar: "https://reqres.in/img/faces/7-image.jpg",
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays greeting", async () => {
  render(<Home />);

  const avatar = await screen.findByTestId("avatar");
  expect(avatar).toContainHTML("Michael");
});
