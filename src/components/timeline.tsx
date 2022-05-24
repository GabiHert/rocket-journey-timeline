import React, { useEffect, useRef, useState, useCallback } from "react";
import { Chrono } from "react-chrono";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { Card } from "./card";
import RocketRight from "../assets/rocket-right.gif";
import RocketLeft from "../assets/rocket-left.gif";
import space from "../assets/space.jpg";
import { ArrowCircleLeft,ArrowCircleRight } from "phosphor-react";

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
    console.log(itemSelectedIndex);

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

  function handleKeyPress({ code }) {
    if (code === "ArrowRight") {
      if (rocket !== RocketRight) setRocket(RocketRight);
    }
    if (code === "ArrowLeft") {
      if (rocket !== RocketLeft) setRocket(RocketLeft);
    }
  }

  return (
      <>
        <span className="bg-amber-500 flex flex-1 flex-row rounded w-20 ">
          <ArrowCircleLeft className="w-8 h-8 mr-3"/>
          <ArrowCircleRight className="w-8 h-8"/>
        </span>
    <div
      onKeyUp={handleKeyPress}
      style={{ backgroundImage: `url(${space})` }}
      className="flex flex-1 rounded-md flex-col pt-20 items-center mb-5 "
    >
      <Chrono
        scrollable={false}
        theme={{
          primary: "#808080",
          secondary: "",
          textColor: "",
          titleColor: "",
        }}
        activeItemIndex={lastItemsIndex}
        items={items}
        onItemSelected={handleOnItemSelected}
        mode="HORIZONTAL"
        hideControls={true}
        cardLess={true}
        lineWidth={1}
        timelineCircleDimension={40}
        itemWidth={600}
      >
        <div className="chrono-icons">
          {itemsIcons.map((value) => {
            console.log("Mudando icone");
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

      {item ? <Card content={item.cardContent} /> : null}
    </div>

      </>
  );
}
