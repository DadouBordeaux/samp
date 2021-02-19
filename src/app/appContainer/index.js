import React, { useState } from "react";
import { entityAdapter } from "./core";
import { searchCity } from "./fetching";
import "./styles.css";

export default function AppContainer({ setEntity }) {
  const [entityName, setEntityName] = useState("");
  const [entityIdentifier, setEntityIdentifier] = useState("");

  const handleSearchAndSetEntity = async () => {
    try {
      const data = await searchCity(entityName);

      const entity = entityAdapter({
        entityName,
        entityIdentifier,
        data,
      });

      setEntity(entity);

      resetFrom();
    } catch (error) {
      // setError(errorFormater(err))
      console.log(err);
    }
  };

  const resetFrom = () => {
    setEntityName("");
    setEntityIdentifier("");
  };

  return (
    <div class="app-box">
      <h2>Add entity</h2>
      <form autocomplete="off">
        <div class="entity-box">
          <input
            autocomplete="off"
            onChange={(e) => setEntityName(e.target.value)}
            type="text"
            name="entity name"
            value={entityName}
            required=""
          />
          <label>City name</label>
        </div>
        <div class="entity-box">
          <input
            onChange={(e) => setEntityIdentifier(e.target.value)}
            type="text"
            name="entity identifier"
            value={entityIdentifier}
          />
          <label>Identifier</label>
        </div>
        <a href="#" onClick={() => handleSearchAndSetEntity()} type="button">
          Add
        </a>
      </form>
    </div>
  );
}
