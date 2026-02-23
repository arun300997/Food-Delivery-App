import { CDN_URL } from "../utils/constants";

const RestuarantCard = ({resData}) => {
    const {name, cuisines, avgRating,cloudinaryImageId} = resData?.info;

    return (
        <div className="m-4 p-4 w-72 bg-gray-100  rounded-lg hover:shadow-lg transition-shadow duration-300">
            <img className="p-2 rounded-lg w-full h-48 object-cover" 
            src={CDN_URL + cloudinaryImageId}
            alt="restaurant" />
            <h2 className="font-bold p-4 text-lg">{name}</h2>
            <p className="px-4">{cuisines.join(", ")}</p>
            <p className="px-4">{avgRating}</p>
        </div>
    )
}

export const withPrometedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
            <label className="absolute bg-green-500 text-white text-xs font-bold px-2 py-1 rounded top-2 left-2 z-10">Closed</label>
            <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestuarantCard;