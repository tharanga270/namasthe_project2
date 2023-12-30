import React, { useEffect } from "react";
import { underconstruction } from "../../config/Images/Images";
const Resources = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src={underconstruction} alt={underconstruction} width="100%" />
    </div>
  );
};

export default Resources;
