import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./style.css";
interface Props {
  content: string[];
}

export function Card({ content }: Props) {
  return <div className="card">{ReactHtmlParser(content.join("\n"))}</div>;
}
