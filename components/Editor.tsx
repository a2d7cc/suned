import { FC } from "react";
import React, { useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";
import "katex/dist/katex.min.css";
import Parser from "html-react-parser";
import { SunEditorOptions } from "suneditor/src/options";

const editorOptions: SunEditorOptions = {
  height: "200",
  buttonList: [
    ["undo", "redo"],
    ["removeFormat"],
    ["bold", "underline", "italic", "fontSize"],
    ["fontColor", "hiliteColor"],
    ["outdent", "indent"],
    ["align", "horizontalRule", "list"],
    ["table", "link", "image", "imageGallery"],
    ["showBlocks", "codeView"],
  ],
  imageRotation: true,
  fontSize: [12, 14, 16, 18, 20],
  colorList: [
    "#828282",
    "#FF5400",
    "#676464",
    "#F1F2F4",
    "#FF9B00",
    "#F00",
    "#fa6e30",
    "#000",
    "rgba(255, 153, 0, 0.1)",
    "#FF6600",
    "#0099FF",
    "#74CC6D",
    "#FF9900",
    "#CCCCCC",
  ],
  imageUploadUrl: "http://localhost:4200/api/files/upload",
  //   imageGalleryUrl: "http://localhost:8080/chazki-gateway/orders/gallery",
};

const Editor: FC = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (content: any) => {
    console.log(content);
    setValue(content);
  };

  const onImageUploadError = (errorMessage: string, result: any) => {
    alert(errorMessage);
    console.log("error!");
  };

  return (
    <>
      <SunEditor
        setOptions={editorOptions}
        lang="en"
        onImageUploadError={onImageUploadError}
        onChange={onChangeHandler}
      />
      <div>{Parser(value)}</div>
    </>
  );
};

export default Editor;
