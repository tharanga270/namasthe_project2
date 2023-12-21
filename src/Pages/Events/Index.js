import React from "react";
import EventLeftPaper from "../../Components/Events/Index";
import EventRightPaper from "../../Components/Events/Index2";
import EventRightPaper2 from "../../Components/Events/Index3";

const Events = () => {
  return (
    <div>
      <div style={{ textAlign: "center", fontWeight: 600, fontSize: "50px" }}>
        <h1>Events</h1>
      </div>
      <EventRightPaper />
      {/* <EventLeftPaper /> */}
      {/* <EventRightPaper2 /> */}
    </div>
  );
};

export default Events;
