import { use, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import resMenuList from "../utils/MockData";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {

    const [resInfo, setResInfo] = useState(resMenuList)
    const resId = useParams();
    // console.log(resId);
    
     console.log(resInfo);
    
    
    // useEffect(() => {
    //     fetchMenu();
    // },[])

    // const fetchMenu = async () => {
    //      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=8.4870451&lng=76.9527248&restaurantId=918457");      
    //      console.log(data);
    //     const json = await data.json();
        
    //     setResInfo(json.data);
        
    // }
    if(resInfo === null)  {<Shimmer/>};    

    const {itemCards} = resInfo[2].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    const categories =  resInfo[2].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => (
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))  
    // const {name, cuisines, avgRating, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
  const result = resInfo
  .map((res) => res?.data?.cards?.[2]?.card?.card?.info)
  .filter((info) => info?.id === resId?.resId); 

    const {name, cuisines, costForTwoMessage} = result[0] || {};
    console.log(categories);
    

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl p-4">{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordiums */}
            {categories.map((category) => (<RestaurantCategory key = {category?.card?.card.title} data = {category?.card?.card}/>))}
        </div>
    )
}

export default RestaurantsMenu;