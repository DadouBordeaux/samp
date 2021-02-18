import React, { useState } from "react";
import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";

import "./index.css";
import { formatDescription } from "./core";

const PIXEL_HEIGHT = 100;
const PIXEL_SIZE = 10;

const CartesianEntity = ({ name, L, l, identifier, creationDate }) => {
  const description = formatDescription(identifier, creationDate);

  return (
    <Entity
      name={name}
      position={Cartesian3.fromDegrees(L, l, PIXEL_HEIGHT)}
      description={description}
      point={{ pixelSize: PIXEL_SIZE }}
    ></Entity>
  );
};

export default function CesiumViewer({ entities }) {
  return (
    <Viewer>
      {entities.map((props) => (
        <CartesianEntity {...props} />
      ))}
    </Viewer>
  );
}
