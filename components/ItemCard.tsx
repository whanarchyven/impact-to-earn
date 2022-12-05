import React from "react";
import Image from "next/image";

interface ItemCardInterface {
  item: { idx:number,name:string };
}

const ItemCard = ({ item}: ItemCardInterface) => {

  return (
    <div
      className={
        "w-full p-2 rounded-xl border-2 relative border-white active-el"
      }
      onClick={() => { }}
    >
      <div className={'block'}>
        <div className={"w-full aspect-square relative mx-auto"}>
          <div className={"w-full h-full absolute"}>
            <img
                alt=""
                src={"/images/card_generation/item_bg.svg"}
            ></img>
          </div>
          <div className={"w-full h-full absolute"}>
            <img
                alt=""
                src={`/images/card_generation/${item.name}.png`}
                className={'aspect-square'}
            ></img>
          </div>
        </div>
      </div>
      <div className={'w-full mt-2 flex justify-between'}>
        <p className={"text-center text-xl font-bold mb-4"}>Cap</p>
        <div className={'blue-purple p-1 rounded-full w-16 h-8 items-center flex justify-center font-bold'}>
          Buy
        </div>
      </div>
      <div className={"w-5 h-5 left-1 top-1 absolute"}>
        <img
          alt=""
          src={"/images/card_generation/head.svg"}
        ></img>

      </div>
      <p className={"h-5 right-2 w-20 text-right top-1 absolute text-sm"}>
        #{item?.idx}
      </p>
    </div>
  );
};

export default ItemCard;
