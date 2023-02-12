import React from "react";
import "./navbar.css";

export function NavBar({
    showHomePage
}) {
  return (
    <div class="container" onClick={showHomePage}>
      <div>
        <img class="logo-img" src="/images/shrimpPic.png" alt="shrimp" />

        <h3 class="rgLogo">RG</h3>
      </div>
    </div>
  );
}
