import React, { useEffect, useRef, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import katex from "katex";
import "katex/dist/katex.min.css";
import { SunEditorOptions } from "suneditor/src/options";
import { Core } from "suneditor/src/lib/core";

const editorOptions: SunEditorOptions = {
  height: "200",
  buttonList: [
    ["undo", "redo"],
    ["removeFormat"],
    ["bold", "underline", "italic", "fontSize"],
    ["fontColor", "hiliteColor"],
    ["align", "horizontalRule", "list"],
    ["table", "link", "image", "imageGallery"],
    ["showBlocks", "codeView"],
    ["math"],
  ],
  katex: katex,
  imageRotation: false,
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
};

export const SunEditorWrap = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);

  const onImageUploadError = (errorMessage: string, result: any) => {
    alert(errorMessage);
    console.log("error!");
  };

  const onChangeHandler = (content: any) => {
    console.log(content);
    setValue(content);
  };

  return (
    <div>
      <SunEditor
        setOptions={editorOptions}
        lang="es"
        onImageUploadError={onImageUploadError}
        onChange={onChangeHandler}
      />
      <div>{value}</div>
    </div>
  );
};
