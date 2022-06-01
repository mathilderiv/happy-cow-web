import React, { useEffect, useState } from "react";

function Test() {
  const [size, setSize] = useState();

  useEffect(() => {
    const changeWidth = () => {
      if (window.innerWidth < 1000) {
        setSize(window.innerWidth);
      }
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [window.innerWidth]);

  console.log(size);

  return <div>Test</div>;
}

export default Test;
