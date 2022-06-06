import React, { useState } from "react";
import { Timeline } from "./components/Timeline/timeline";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import planet_1 from "../src/assets/planet-1.png";
import planet_2 from "../src/assets/planet-2.png";
import planet_3 from "../src/assets/planet-3.png";
import planet_4 from "../src/assets/planet-4.png";
import planet_5 from "../src/assets/planet-5.png";
import planet_6 from "../src/assets/planet-6.png";
import planet_7 from "../src/assets/planet-7.png";
import planet_8 from "../src/assets/planet-8.png";
import planet_9 from "../src/assets/planet-9.png";
import planet_10 from "../src/assets/planet-10.png";
import { X } from "phosphor-react";

function App() {
  const items: TimelineItemModel[] = [
    {
      title: "2016",
      cardContent: [
        "<h1>",
        "This is my titile",
        "</h1>",
        "<br/>",
        "<h1>",
        "This is another title",
        "</h1>",
      ],
    },
    {
      title: "2017",
      cardContent: [
        "<h1>",
        "This is my titile",
        "</h1>",
        "<br/>",

        "<div style={{background:'white'}}>",
        "<h1>",
        "This is another title",
        "</h1>",
        "</div>",
      ],
    },
    {
      title: "2018",
      cardContent: [
        "<h1>",
        "This is my titile",
        "</h1>",
        "<br/>",
        "<h2>",
        "This is another title",
        "</h2>",
      ],
    },
    {
      title: "2019",
      cardContent: [
        "<h1>",
        "This is my titile",
        "</h1>",
        "<br/>",
        "<h2>",
        "This is another title",
        "</h2>",
      ],
    },
    {
      title: "2020",
      cardContent: [
        "<h1>",
        "This is my titile",
        "</h1>",
        "<br/>",
        "<h2>",
        "This is another title",
        "</h2>",
      ],
    },
    {
      title: "2021",
      cardContent: [
        "<h1>",
        "This is my titile",
        "</h1>",
        "<br/>",
        "<h2>",
        "This is another title",
        "</h2>",
      ],
    },
    {
      title: "2022",
      cardContent: [
        "<h1>",
        "This is my titile",
        "</h1>",
        "<br/>",
        "<h2>",
        "This is another title",
        "</h2>",
      ],
    }
  ];
  const icons = [
    planet_1,
    planet_2,
    planet_3,
    planet_4,
    planet_5,
    planet_6,
    planet_7,
    planet_8,
    planet_9,
    planet_10,
  ];

  return (
      <>
        <h1 className="font-teko" style={{fontSize:"100px"}} >My Rocket Journey</h1>
        <div className="flex flex-1 flex-col pt-20 m-5">
          <Timeline items={items} icons={icons} />
        </div>
      </>
  );
}

export default App;
