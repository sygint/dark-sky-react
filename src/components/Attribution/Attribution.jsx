import React from "react";

import "./Attribution.scss";

function Attribution() {
  return (
    <div className="attributions">
      <a href="https://darksky.net/poweredby/" alt="Powered by Dark Sky">
        Powered by Dark Sky
      </a> with <a
        href="https://www.amcharts.com/free-animated-svg-weather-icons/"
        alt="Icons by amCharts"
      >
        Icons
      </a>{" "}
      by{" "}
      <a href="http://amcharts.com" alt="amCharts website">
        amCharts
      </a>
    </div>
  );
}

export default Attribution;
