import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { adText, adCTA, adImage, adBgColor } from "../Redux/store.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { SketchPicker } from "react-color";
import { useNavigate } from "react-router-dom";

function ModifyComponent({setBoolean}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [cta, setCta] = useState("");
  const [adimage, setAdImage] = useState("");
  const [imgname, setImgName] = useState("");
  const [color, setColor] = useState("");
  const [recentColor, setRecentColor] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCTAChange = (e) => {
    setCta(e.target.value);
  };

  const handleImageChange = (e) => {
    const filename = e.target.value.split("\\");
    setImgName(filename[2]);
    const imgurl = URL.createObjectURL(e.target.files[0]);
    setAdImage(imgurl);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  const openEyeDropper = async () => {
    if ("EyeDropper" in window) {
      let eyeDropper = new window.EyeDropper();
      const { sRGBHex } = await eyeDropper.open();
      setColor(sRGBHex);
    }
  };

  const recentColorHandler = () => {
    let newRecentColor = recentColor.slice();
    if (color !== "" && !newRecentColor.includes(color)) {
      if (newRecentColor.length >= 5) {
        newRecentColor.pop();
      }
      newRecentColor.unshift(color);
      setRecentColor(newRecentColor);
    }
  };

  useEffect(() => {
    dispatch(adText(text));
  }, [text, dispatch]);

  useEffect(() => {
    dispatch(adCTA(cta));
  }, [cta, dispatch]);

  useEffect(() => {
    dispatch(adImage(adimage));
  }, [adimage, dispatch]);

  useEffect(() => {
    dispatch(adBgColor(color));
  }, [color, dispatch]);

  return (
    <div style={{ overflow: "hidden" }} className="flex flex-col sm:w-1/2 w-screen">
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="absolute top-20 right-20 cursor-pointer"
        onClick={()=>{
          navigate('/');
        }}
      />
      <h1 className="text-center text-lg sm:text-2xl font-bold mt-32">
        Ad customization
      </h1>
      <h2 className="text-center text-sm sm:text-lg mt-2 text-gray-500 text-opacity-70">
        Customize your ad and get the templates accordingly
      </h2>
      <div className="sm:ml-20 ml-10 mt-14">
        <div className="flex items-center h-14 w-5/6 sm:w-4/5 border-2 border-slate-300 rounded-lg">
          <input
            type="file"
            id="image-input"
            hidden
            onChange={handleImageChange}
          />
          <img className="ml-3" width={"30px"} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4Nuileou-TzewHVVFKE5mAEMlZRRCd-v2PGnGUPngGk1rAUTZNMGKGO2AplRxgvrSQZD7kZvsY99p-AeMhsl_HNo9u9ONAGa-0yuA_rT-iNp7n30H_GbHot5d5-1Y3Yf9Q3i_6MxKYnJuvxfwBnHMUkBn_8aGJeeNNk4sUkoNTMGouCwgiaH3hOztKsu2/w55-h55/Screenshot%202024-04-18%20223134.png" alt="img" />
          <label htmlFor="image-input" className="text-sm text-slate-500 ml-3 cursor-pointer">
            Change the ad creative image.
          </label>
          <label
            htmlFor="image-input"
            className="ml-1 text-sm text-blue-700 font-semibold cursor-pointer underline underline-offset-1"
          >
            Select File
          </label>
          <label className="text-xs ml-3 text-slate-500 truncate w-[10rem]">
            {imgname}
          </label>
        </div>
      </div>
      <div className="sm:ml-20 ml-10 mt-10">
        <div className="flex flex-col border-2 border-slate-300 sm:w-4/5 w-5/6 h-13 rounded-lg">
          <label className="mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold">
            Add Content
          </label>
          <input
          placeholder="American Heritage Chocolate"
            type="text"
            className="mx-3 focus:outline-none"
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="sm:ml-20 ml-10 mt-10">
        <div className="flex flex-col border-2 border-slate-300 w-5/6 sm:w-4/5 h-14 rounded-lg">
          <label className="mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold">
            CTA
          </label>
          <input
          placeholder="Buy Now"
            type="text"
            className="mx-3 mb-1 focus:outline-none"
            onChange={handleCTAChange}
          />
        </div>
      </div>
      <div className="sm:ml-20 ml-10 mt-10">
        <h1 className="text-slate-500 text-sm font-bold">Choose your color </h1>
        <div className="flex mt-2 ">
          {recentColor.map((c, ind) => (
            <div
              key={ind}
              onClick={() => setColor(c)}
              style={{ backgroundColor: c }}
              className="w-7 mr-2 h-7 text-lg font-bold rounded-full cursor-pointer text-center"
            />
          ))}
          <div
            className="w-7 h-7 text-lg font-bold bg-slate-100  rounded-full cursor-pointer text-center"
            onClick={() => setShowPicker(true)}
          >
            +
          </div>
          {showPicker && (
            <div className="absolute z-10">
              {" "}
              <div 
                onClick={() => {
                  setShowPicker(false);
                  recentColorHandler();
                }}
                className="fixed top-0 left-0 bottom-0 right-0 z-0"
              />
              <SketchPicker color={color} onChange={handleChangeComplete} />
              <div
                className="w-full border-2 bg-white border-slate-300 h-10 font-mono text-xs font-bold text-center pt-2 cursor-pointer z-20 absolute"
                onClick={openEyeDropper}
              >
                Pick color from this page
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModifyComponent;

