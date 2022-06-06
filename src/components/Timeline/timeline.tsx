import React, { useEffect, useRef, useState, useCallback } from "react";
import { Chrono } from "react-chrono";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { Card } from "./card";
import RocketRight from "../../assets/rocket-right.gif";
import RocketLeft from "../../assets/rocket-left.gif";
import space from "../../assets/space.jpg";
import { ArrowCircleLeft,ArrowCircleRight } from "phosphor-react";
import stars from "../../assets/stars.gif"

interface Props {
  items: TimelineItemModel[];
  icons: string[];
}

let once = false;
export function Timeline({ items, icons }: Props) {
  const lastItemsIndex = items.length - 1;

  useEffect(() => {
    if (once) return;
    once = true;
    handleOnItemSelected(items[lastItemsIndex]);
  });


  const [activeItemIndex,setActiveItemIndex] = useState(lastItemsIndex)

  const [item, setItem] = useState<TimelineItemModel | null>(
    items[lastItemsIndex]
  );
  const [itemsIcons, setitemsIcons] = useState(icons);
  const [rocket, setRocket] = useState(RocketRight);

  function handleOnItemSelected(itemSelected) {
    setItem(itemSelected);
    const itemSelectedIndex = items.findIndex(
      (element) => element.title === itemSelected.title
    );

    const modifiedIcons = [...itemsIcons];
    modifiedIcons[itemSelectedIndex] = rocket;

    if (itemSelectedIndex > 0) {
      modifiedIcons[itemSelectedIndex - 1] = icons[itemSelectedIndex - 1];
    }

    if (itemSelectedIndex < icons.length) {
      modifiedIcons[itemSelectedIndex + 1] = icons[itemSelectedIndex + 1];
    }

    setitemsIcons([...modifiedIcons]);
    setActiveItemIndex(itemSelectedIndex)
  }

  function handleKeyPress({ code }) {
    console.log("handleKeyPress")
    if (code === "ArrowRight") {
      if (rocket !== RocketRight) setRocket(RocketRight);
    }
    if (code === "ArrowLeft") {
      if (rocket !== RocketLeft) setRocket(RocketLeft);
    }
  }

  function handleArrowRightPressed(){
      console.log("handleArrowRightPressed")
     if(!(activeItemIndex<lastItemsIndex)) return 
       setActiveItemIndex(activeItemIndex + 1)
       console.log(activeItemIndex)
       handleKeyPress({code:'ArrowRight'})

       const itemSelected = items[activeItemIndex]
       setItem(itemSelected);

       const itemSelectedIndex = items.findIndex(
           (element) => element.title === itemSelected.title
       );

       const modifiedIcons = [...itemsIcons];
       modifiedIcons[itemSelectedIndex] = rocket;

       if (itemSelectedIndex > 0) {
         modifiedIcons[itemSelectedIndex - 1] = icons[itemSelectedIndex - 1];
       }

       if (itemSelectedIndex < icons.length) {
         modifiedIcons[itemSelectedIndex + 1] = icons[itemSelectedIndex + 1];
       }

       setitemsIcons([...modifiedIcons]);




  }


  return (
      <>

    <div
      onKeyUp={handleKeyPress}
      className="flex flex-1 rounded-md flex-col p-5 pb-20 pt-20 bg-brand-800 items-center"
    >
      <Chrono
        scrollable={false}
        theme={{
          primary: "#808080",
          secondary: "",
          textColor: "",
          titleColor: "",
        }}
        activeItemIndex={activeItemIndex}
        items={items}
        onItemSelected={handleOnItemSelected}
        mode="HORIZONTAL"
        cardLess={true}
        lineWidth={1}
        timelineCircleDimension={40}
        itemWidth={400}
        enableOutline={false}

      >
        <div className="chrono-icons">
          {itemsIcons.map((value) => {
            return (
              <img
                key={itemsIcons.indexOf(value)}
                src={value}
                alt={value}
              ></img>
            );
          })}
        </div>
      </Chrono>
    </div>
        {item ? <Card content={item.cardContent} /> : null}
      </>
  );
}
