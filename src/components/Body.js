import RestuarantCard, {withPrometedLabel} from "./RestaurantCard"
import { useState, useEffect, useContext} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import userContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState(listOfRestaurants);
    const [searchText, setSearchText] = useState("");

    const PromotedRestaurnatCards = withPrometedLabel(RestuarantCard)

    // let ListOfRestaurants2 = [{
    //     "info": {
    //         "id": "448001",
    //         "name": "Pizza Hut",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/24b1b2e7-3f0a-488d-80d5-9bb4b2861c82_448001.JPG",
    //         "cuisines": [
    //             "Pizzas"
    //         ],
    //         "avgRating": 3.4,
    //     }},
    //     {
    //      "info": {
    //         "id": "448002",
    //         "name": "KFC",
    //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/24b1b2e7-3f0a-488d-80d5-9bb4b2861c82_448001.JPG",
    //         "cuisines": [
    //             "Pizzas"
    //         ],
    //         "avgRating": 4.4,
    //     }
           
    // }]
    useEffect(() => {
        fetchData()}, [])
    
    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.48320&lng=76.94580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    const {loggedInUser,setUserName} = useContext(userContext)


    return (listOfRestaurants.length === 0)  ? <Shimmer/> : (
        <div className="body">
        <div className="filter">
          <div className="search px-4 m-4 justify-between flex">
            <input type="text" 
            className=" w-330 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Search" value = {searchText}
            onChange={(e) => {setSearchText(e.target.value)}}
            />
            <button className=" px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurants(filteredRestaurants)
                
            }}>Search</button>
          </div>
          <div className="search px-4 m-4 justify-between flex">
            <input type="text"
            className=" w-330 px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Username" 
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
            />
          </div>

        </div>
         <div className="flex flex-wrap">
            {
                filteredRestaurants.map((restaurant) => (
                    <Link key = {restaurant.info.id} to={"/retaurnats/" + restaurant.info.id}>
                    {restaurant.info.isOpen === false? (<PromotedRestaurnatCards key = {restaurant.info.id} resData = {restaurant}/>) :
                    (<RestuarantCard key={restaurant.info.id} resData = {restaurant}/>)}
                    </Link>
                ))
            }
         </div>
        </div>
    )
}

export default Body;