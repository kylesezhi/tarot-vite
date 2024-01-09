import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("clicking card shows random card", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
  const tarotCardContainer = screen.getByTestId("tarot-card-container");
  expect(tarotCardContainer).toBeInTheDocument();

  const backCard = screen.getByTestId("back-card");
  const frontCard = screen.getByTestId("front-card");
  expect(backCard).toBeInTheDocument();
  expect(frontCard).toBeInTheDocument();
  await waitFor(() => expect(backCard).toHaveStyle({ opacity: 1 }));
  expect(frontCard).toHaveStyle({ opacity: 0 });

  fireEvent.click(tarotCardContainer);
  await waitFor(() => expect(backCard).toHaveStyle({ opacity: 0 }));
  expect(frontCard).toHaveStyle({ opacity: 1 });
}, 20000);
