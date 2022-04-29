import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import Home from "./Home";

describe("Home component ", () => {
  test("First test", () => {
    render(<Home />);

    const btn = screen.getByRole("button");
    userEvent.click(btn);
    console.log("Testing it it works");
  });
});
