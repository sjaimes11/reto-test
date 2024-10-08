import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Like from "../components/Like";

describe("Like Component", () => {
  test("Por defecto, el componente muestra en el párrafo el valor 'Likes: 0'", () => {
    render(<Like />);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  });

  test("Cuando se hace clic en el botón Like, el número de likes se incremente en uno", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });

  test("Cuando se hace clic en el botón Dislike, el número de likes se decrementa en uno", () => {
    render(<Like />);
    const dislikeButton = screen.getByText("Dislike");
    fireEvent.click(dislikeButton);
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
  });
});