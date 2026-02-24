import { use, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import resMenuList from "../utils/MockData";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {

    const [resInfo, setResInfo] = useState(resMenuList)
    const [showIndex, setShowIndex] = useState(1);
    const resId = useParams();

    if(resInfo === null)  {<Shimmer/>};    

    const {itemCards} = resInfo[2].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    const categories =  resInfo[2].data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => (
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))  

  const result = resInfo
  .map((res) => res?.data?.cards?.[2]?.card?.card?.info)
  .filter((info) => info?.id === resId?.resId); 

    const {name, cuisines, costForTwoMessage} = result[0] || {};    

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl p-4">{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* categories accordiums */}
            {categories.map((category, index) => (<RestaurantCategory key = {category?.card?.card.title} 
            data = {category?.card?.card}
            isOpen = {index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}/>))}
           
        </div>
    )
}

export default RestaurantsMenu;