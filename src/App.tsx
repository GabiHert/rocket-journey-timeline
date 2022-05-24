import React, { useState } from "react";
import { Timeline } from "./components/timeline";
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

function App() {
  const items: TimelineItemModel[] = [
    {
      title: "1",
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
      title: "2",
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
      title: "3",
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
      title: "4",
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
      title: "5",
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
      title: "6",
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
      title: "7",
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
      title: "8",
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
      title: "9",
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
      title: "10",
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
      <header className="mb-10 text-5xl">
        <h1> This is my timeline</h1>
      </header>
      <Timeline items={items} icons={icons} />
    </>
  );
}

export default App;
