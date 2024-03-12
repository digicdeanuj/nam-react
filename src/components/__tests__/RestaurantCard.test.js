import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom";
import MOCK_DATA from '../mocks/resCardMock.json';

it("should render RestaurantCard with props", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)
    const cardName = screen.getByText("Blue Tokai Coffee Roasters");
    expect(cardName).toBeInTheDocument();
})

// it("should render HOC with props", () => {
//     render(<withPromotedLabel resData={MOCK_DATA} />)
//     const cardName = screen.getByText("Promoted");
//     expect(cardName).toBeInTheDocument();
// })