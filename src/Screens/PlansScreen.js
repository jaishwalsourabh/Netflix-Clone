import React from "react";
import "./PlansScreen.css";

function PlansScreen() {
  return (
    <div className="plansScreen">
      {/* <h4>Renewal date : 04/03/2021</h4> */}
      <div className="plansScreen_plans">
        <div className="plansScreen_info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen_plans">
        <div className="plansScreen_info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="plansScreen_plans">
        <div className="plansScreen_info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default PlansScreen;
