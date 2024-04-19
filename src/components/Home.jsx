import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
export default function Home({ setBoolean }) {
  const navigate = useNavigate();
  return (
    <div style={{ overflow: "hidden" }} class="appMain" id="home">
      <div class="appMain__top">
        <div class="appMain__productRanking">
          <span>#1</span> SOCIAL MEDIA AUTOMATION PRODUCT
        </div>
        <h4 class="appMain__headingSmall">
          Generative AI platform to create stunning{" "}
        </h4>
        <h2 class="appMain__headingBig">social media ads</h2>
        <p class="appMain__subHeading">
          Supercharge your campaigns with our AI platform, effortlessly creating
          captivating and effective ads.
          <br />
          <span>No more manual design hassle!</span>
        </p>
        <div onClick={()=>{
            navigate('/Editor')
        }} class="appMain__btns">
          <p class="styledBtn  btnBgGradient">
            Start Editing
          </p>
        </div>
        <div class="appMain__line"></div>
        <div class="appMain__benefits">
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
        <div class="appMain__backedby">
          <h4>Recognized by industry leaders</h4>
          <div class="backedby__line"></div>
          <div class="backedby__container">
            <img
              src="https://d273i1jagfl543.cloudfront.net/assets/animationFiles/meta.svg"
              alt="meta-business-partner-img"
            />
            <a
              class="producthunt-link"
              href="https://www.producthunt.com/posts/zocket?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-zocket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="producthunt-img"
                src="https://d273i1jagfl543.cloudfront.net/assets/animationFiles/product-hunt.svg"
                alt="product-of-the-week-producthunt-img"
              />
            </a>
            <img
              src="https://d273i1jagfl543.cloudfront.net/assets/animationFiles/google.svg"
              alt="google-for-startup-img"
            />
          </div>
          <div class="backedby__line"></div>
        </div>
      </div>
    </div>
  );
}
