import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("should load COntact component", () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
})
test("should load Button in Contact component", () => {
    render(<Contact />);
    const btnComp = screen.getByRole('button');
    expect(btnComp).toBeInTheDocument();
})
test("should load input in Contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText('name');
    expect(inputName).toBeInTheDocument();
})
test("should load 2 input in Contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(2);
})