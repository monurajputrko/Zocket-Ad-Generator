import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { msr } from "usehoks/src/Hookes/Module1";
export default function Home({ setBoolean }) {
  const navigate = useNavigate();
  return (
    <div style={{ overflow: "hidden" }} className="appMain" id="home">
      <div className="appMain__top">
        <div className="appMain__productRanking">
          <span>#1</span> SOCIAL MEDIA AUTOMATION PRODUCT
        </div>
        <h4 className="appMain__headingSmall">
          Generative AI platform to create stunning{" "}
        </h4>
        <h2 className="appMain__headingBig">social media ads</h2>
        <p className="appMain__subHeading">
          Supercharge your campaigns with our AI platform, effortlessly creating
          captivating and effective ads.
          <br />
          <span>No more manual design hassle!</span>
        </p>
        <div onClick={()=>{
            navigate('/Editor')
            msr("Hello World!")
        }} className="appMain__btns">
          <p className="styledBtn  btnBgGradient">
            Start Editing
          </p>
        </div>
        <div className="appMain__line"></div>
        <div className="appMain__benefits">
          <div>
            <img
              src="https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/blueTick.svg"
              alt="blueTick-icon"
            />
            REAL TIME INSIGHTS
          </div>
          <div>
            <img
              src="https://d1n7zmj0fa1o7h.cloudfront.net/zocket-ai-creative/assets/assets/blueTick.svg"
              alt="blueTick-icon"
            />
            AI AD CREATION
          </div>
        </div>
        <div className="appMain__backedby">
          <h4>Recognized by industry leaders</h4>
          <div className="backedby__line"></div>
          <div className="backedby__container">
            <img
              src="https://d273i1jagfl543.cloudfront.net/assets/animationFiles/meta.svg"
              alt="meta-business-partner-img"
            />
            <a
              className="producthunt-link"
              href="https://www.producthunt.com/posts/zocket?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-zocket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="producthunt-img"
                src="https://d273i1jagfl543.cloudfront.net/assets/animationFiles/product-hunt.svg"
                alt="product-of-the-week-producthunt-img"
              />
            </a>
            <img
              src="https://d273i1jagfl543.cloudfront.net/assets/animationFiles/google.svg"
              alt="google-for-startup-img"
            />
          </div>
          <div className="backedby__line"></div>
        </div>
      </div>
    </div>
  );
}

