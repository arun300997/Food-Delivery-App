import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch()
    
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map((item) => (
                <div key = {item.card.info.id} className="flex justify-between items-center p-4 border-b">
                    <div className="text-left">
                        <h3 className="font-bold text-lg">{item.card.info.name}</h3>
                        <p className="text-sm text-gray-600">Price: ₹{item.card.info.price / 100}</p>
                        <p className="text-sm text-gray-600">{item.card.info.description}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} className="w-24 h-24 object-cover rounded items-end"/>
                        <div className="absolute">
                        <button className="mt-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300"
                        onClick={() => handleAddItem(item)}>Add +</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;