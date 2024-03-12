import { render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom";
import MOCK_DATA from '../mocks/resApiMockData.json'
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { execPath } from "process";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});
it("should render Body Component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))
    render(<Body />);
    const searchBtn = screen.getByRole("button", { name: "Search" });
    hasExpectedRequestMetadata(searchBtn).toBeInTheDocument(;)
})
