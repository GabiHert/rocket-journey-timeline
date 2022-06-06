import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./style.css";
interface Props {
  content: string[];
}

export function Card({ content }: Props) {
  return <div className="card bg-brand-800 ml-[10%] mr-[10%] w-[80%]">{ReactHtmlParser(content.join("\n"))}</div>;
}
