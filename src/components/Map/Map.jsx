import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [20, -20],
        scale: 600
      }}
      className="absolute top-0 right-[-20%] md:h-full w-full z-[-1] "
    >
      <Geographies
        geography="/features.json"
        fill="#101213"
        stroke="#d61342"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[30.7885, 31.0019 ]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#fcfafa",
          strokeWidth: 1,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#fcfafa">
          {"Egypt"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
