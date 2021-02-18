import React, { useState } from "react";

import AppContainer from "./appContainer";
import CesiumViewer from "./cesiumViewer";

export default function App() {
  const [entities, setEntity] = useState([]);

  const handleAddEntity = (entity) => {
    const newEntities = [...entities, entity];
    setEntity(newEntities);
  };

  return (
    <div>
      <AppContainer setEntity={handleAddEntity}></AppContainer>
      <CesiumViewer entities={entities}></CesiumViewer>
    </div>
  );
}
