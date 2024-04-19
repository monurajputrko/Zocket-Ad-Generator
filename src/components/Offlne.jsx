import React from "react";
import "./Offline.css";
import { Link } from "react-router-dom";
export default function Offlne({ data }) {
  return (
    <div className="mainOffline">
      {data ? (
        <div class="wrapper">
          <h1>OFFLINE</h1>
          <br />
          <h4>Please check your internet connection</h4>
        </div>
      ) : (
        <div class="wrapper">
          <h1>404</h1>
          <br />
          <h4>Page Not Found</h4>
          <Link to="/" class="button">Home</Link>
        </div>
      )}
    </div>
  );
}
