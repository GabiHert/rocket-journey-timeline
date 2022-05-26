import React from "react";
import ReactHtmlParser from "react-html-parser";
import "./style.css";
interface Props {
  content: string[];
}

export function Card({ content }: Props) {
  return <div className="card bg-zinc-400 w-[50%] opacity-80">{ReactHtmlParser(content.join("\n"))}</div>;
}
