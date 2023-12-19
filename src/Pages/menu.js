import React, { useEffect, useState } from "react";
import axios from "axios";

export const Menu = () => {
  const [foodname, setFoodname] = useState("");
  const [food, setFood] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/searchFood", {
        foodname,
      });
      if (response.data.message === "300") return alert("Food Not Found");
      setFood(response.data.message);
      console.log(food);
    } catch (error) {
      alert("Error");
    }
  };
  useEffect(() => {}, [food, foodname]);

  return (
    <>
      <div className="bg-black custombg h-[70vh] bg-cover w-full">
        <div className="flex pt-[30vh] justify-center h-[40vh] text-xl text-white ">
          <input
            type="text"
            className="w-[50vh] bg-white/20 text-xl rounded-l-xl "
            onChange={(e) => {
              setFoodname(e.target.value.toLowerCase());
            }}
          />
          <button
            type="submit"
            className="w-[20vh] bg-black/50   rounded-r-xl ml-1 hover:bg-black/70 "
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
      <div className=" m-5 flex gap-4 flex-wrap justify-center">
        {food.map((item) => (
          <div className="h-[50vh] w-80 border-solid border-2 bg-black/10 border-black/40 p-5 rounded-xl hover:scale-105 delay-200 ease-in-out ">
            <img src={item.image} alt="foodtext" className="h-48 rounded-xl" />
            <div className="mt-2 text-lg w-[90%] ml-auto mr-auto flex justify-center">
              <ul>
                <li>Item</li>
                <li>Category</li>
                <li>Quantity</li>
                <li>Price</li>
              </ul>
              <ul className="ml-2">
                <li className="font-bold">{item.foodname.toUpperCase()}</li>
                <li>
                  {item.category.toUpperCase()}
                  {item.category === "non-veg" ? <span className="h-3 w-3 rounded-[50%] bg-red-500 inline-block ml-2"></span>: <span className="h-3 w-3 rounded-[50%] bg-green-500 inline-block ml-2"/>}
                </li>
                <li><button className="border-solid border-2 rounded-sm w-5 border-black/20 mr-1">-</button>{item.quantity}<button className="border-solid border-2 rounded-sm w-5 border-black/20 ml-1">+</button> </li>
                <li>&#8377; {item.price}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
