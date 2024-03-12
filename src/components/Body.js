import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRest, setListOfRest] = useState([]);
    const [listOfFilteredRest, setlistOfFilteredRest] = useState([]);

    const [searchText, setSearchText] = useState('');
    const RestaurantWithPromoted = withPromotedLabel(RestaurantCard);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();
        setListOfRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setlistOfFilteredRest(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const handleFilterTopRest = () => {
        const filteredList = listOfRest.filter((res) =>
            res.info.avgRating > 4.5);
        setlistOfFilteredRest(filteredList)
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<h1>Please Check internet...</h1>);
    }
    return listOfRest.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-container">
                <div className="search">
                    <input type="text" className="search-box" value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} />
                    <button onClick={() => {
                        const filteredRest = listOfRest.filter((rest) => (rest.info.name.toLowerCase().includes(searchText.toLowerCase())));
                        setlistOfFilteredRest(filteredRest);

                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => handleFilterTopRest()}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="rest-container">
                {listOfFilteredRest.map(item => (
                    <Link key={item.info.id}
                        to={"/restaurants/" + item.info.id}>
                        {item.info.promoted ? <RestaurantWithPromoted resData={item} />
                            : <RestaurantCard resData={item} />}
                    </Link>
                ))}
            </div>
        </div>
    )
};
export default Body;