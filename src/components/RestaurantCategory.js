import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <div>
        <div className=" items-center w-6/12  bg-gray-100 p-4 m-auto mb-4 cursor-pointer shadow-lg"
        onClick = {handleClick}>
            {/* Header */}
            <div className="flex justify-between items-center">
            <span className="font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
            <span><IoIosArrowDown/></span>
            </div>
            {/* Accordium */}
           {isOpen && <ItemList items = {data.itemCards}/>}
        </div>
        </div>
    )
}

export default RestaurantCategory;