import React from "react";
import ImageComponent from "./ImageComponent";
import ModifyComponent from "./ModifyComponent";
import '../App.css';


export default function Editor() {
  return (
    <div className="editor" style={{ overflow: "hidden" }}>
      <ImageComponent />
      <ModifyComponent />
    </div>
  );
}
