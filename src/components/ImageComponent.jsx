import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { strBreak, drawRect } from "./data.jsx";
import { useSelector } from "react-redux";

const ImageComponent = () => {
  const reduxData = useSelector((state) => state.ad);

  const canvasRef = useRef(null);
  const textCanvasRef = useRef(null);
  const ctaCanvasRef = useRef(null);
  const defaultBgColor = "#FFFFFF";
  const adText = "American Heritage Chocolate";
  const adCTA = "Buy Now";
  const adImage =
    "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    drawTemplate();
  }, []);

  useEffect(() => {
    writeTextContent(reduxData.adText);
    drawAdImage(reduxData.adImage);
    writeCTA(reduxData.adCTA);
  }, [reduxData]);

  const drawTemplate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const images = [
      "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png",
      "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
      "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png?random=12345",
    ];

    images.forEach((src) => {
      const image = new Image();
      image.onload = () => {
        ctx.drawImage(image, 0, 0);
      };
      image.src = src;
    });
  };

  const drawAdImage = (img) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.globalCompositeOperation = "source-atop";
    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 56, 99, 970, 600);
    };
    image.src = img || adImage;
    ctx.globalCompositeOperation = "source-over";
  };

      const writeTextContent = (text) => {
      const canvas = textCanvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.font = "44px Arial";
      let start = 90;
      if (!text) {
        text = adText;
      }
      const lines = strBreak(text, 31);
      lines.forEach((line) => {
        ctx.fillText(line, 50, start);
        start += 50;
      });
    };


  const writeCTA = (text) => {
    const canvas = ctaCanvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const bgColor = "#ffffff";
    if (text === "") {
      text = adCTA;
    }
    const lines = strBreak(text, 20);
    ctx.font = "30px Arial";
    const text_width = ctx.measureText(lines[0]).width;
    const text_height = lines.length * 30;
    const width = text_width + 48;
    const height = text_height + 48;
    drawRect(190, 320, width, height, 20, bgColor, ctx);
    let starty = 320 + (height / 2 + 8);
    const startx = 190 + 24;
    ctx.fillStyle = "#000000";
    lines.forEach((line) => {
      ctx.fillText(line, startx, starty);
      starty += 30;
    });
  };
 
  return (
    <div style={{ overflow: "hidden" }} className="sm:w-1/2 w-screen sm:h-screen h-[30rem] flex justify-center items-center bg-gray-400">
     <canvas
        className="w-56 sm:w-[30rem]"
        ref={canvasRef}
        width={1080}
        height={1080}
        style={{
          backgroundColor: `${reduxData.adBgColor || defaultBgColor}`,
          position: "absolute",
          
        }}
      />
      <canvas
        className="w-56 sm:w-[30rem]"
        ref={textCanvasRef}
        width={1080}
        height={1080}
        style={{ position: "absolute",marginTop:"650px" }}
      />
      <canvas
        className="w-56 sm:w-[30rem]"
        ref={ctaCanvasRef}
        width={1080}
        height={1080}
        style={{ position: "absolute",marginTop:"500px",marginRight:"120px" }}
      />
    </div>
  );
};

ImageComponent.propTypes = {
  reduxData: PropTypes.shape({
    adText: PropTypes.string,
    adImage: PropTypes.string,
    adCTA: PropTypes.string,
    adBgColor: PropTypes.string,
  }),
};

export default ImageComponent;

