import "./App.css";
import React, { useEffect, useState } from "react";
import { SHIP_SIZES, SHIP_ATTRIBUTES, SHIP_TIERS } from "./ShipData";
import { LockClosedIcon } from "@heroicons/react/24/solid";

import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import SliderInput from "./SliderInput";

export default function App() {
  const baseMaxHealth = 0;
  const baseMaxDamage = 0;

  // const [shipSizesOptions, setHipSizesOptions] = useState([]);

  // const [shipName, setShipName] = useState("");
  // const [shipSize, setShipSize] = useState("small");
  // const [shipCreationOptions, setShipCreationOptions] = useState(
  //   SHIP_SIZES[shipSize]
  // );
  const [shipCreationObject, setShipCreationObject] = useState({
    sizeCategory: "small",
    description: "0m - 100m",
    maxAttributelevel: 2,
    maxAttributes: 2,
    maxHullPoints: 3,
    maxDamagePoints: 3,
    tierMultiplier: 1,
    name: "",
    attributes: [
      { name: "Empty", level: 0 },
      { name: "Empty", level: 0 },
    ],
    hullPoints: 1,
    damagePoints: 0,
  });
  const [shipTier, setShipTier] = useState("t1");

  useEffect(() => {
    setShipCreationObject(createShipCreationObject(SHIP_SIZES["small"]));
    // console.log(shipCreationObject);
  }, []);

  useEffect(() => {
    // console.log(shipCreationObject);
    // console.log(shipCreationObject.sizeCategory);
  }, [shipCreationObject]);

  useEffect(() => {}, []);

  function createShipCreationObject(shipObject) {
    const newShipCreationObject = { ...shipObject };
    newShipCreationObject.name = "";
    newShipCreationObject.attributes = Array.from({
      length: newShipCreationObject.maxAttributes,
    }).map((item, index) => ({
      name: "Empty",
      level: 0,
    }));
    newShipCreationObject.hullPoints = 1;
    newShipCreationObject.damagePoints = 0;
    return newShipCreationObject;
  }

  function setShipSize(size) {
    setShipCreationObject(createShipCreationObject(SHIP_SIZES[size]));
  }
  function setShipHullPoints(hullPoints) {
    const newShipCreationObject = { ...shipCreationObject };
    newShipCreationObject.hullPoints = hullPoints;
    setShipCreationObject(newShipCreationObject);
  }

  function setShipDamagePoints(damagePoints) {
    const newShipCreationObject = { ...shipCreationObject };
    newShipCreationObject.damagePoints = damagePoints;
    setShipCreationObject(newShipCreationObject);
  }

  function setShipAttributeName(name, index) {
    const newShipCreationObject = { ...shipCreationObject };
    newShipCreationObject.attributes[index].name = name;
    setShipCreationObject(newShipCreationObject);
  }

  function setShipAttributeLevel(level, index) {
    const newShipCreationObject = { ...shipCreationObject };
    newShipCreationObject.attributes[index].level = level;
    setShipCreationObject(newShipCreationObject);
  }

  function createShipAttributeOptions(sizeCategory) {
    const shipAttrubuteOptions = ["Empty"];

    if (sizeCategory === "small") {
      SHIP_ATTRIBUTES.positive.scaling.allShips.forEach((el) => {
        shipAttrubuteOptions.push(el);
      });
      SHIP_ATTRIBUTES.positive.scaling.onlySmallShips.forEach((el) => {
        shipAttrubuteOptions.push(el);
      });
      SHIP_ATTRIBUTES.positive.nonScaling.allShips.forEach((el) => {
        shipAttrubuteOptions.push(el);
      });
      SHIP_ATTRIBUTES.negative.scaling.allShips.forEach((el) => {
        shipAttrubuteOptions.push(el);
      });
    } else {
      SHIP_ATTRIBUTES.positive.scaling.allShips.forEach((el) => {
        shipAttrubuteOptions.push(el);
      });
      SHIP_ATTRIBUTES.positive.nonScaling.allShips.forEach((el) => {
        shipAttrubuteOptions.push(el);
      });
      SHIP_ATTRIBUTES.negative.scaling.allShips.forEach((el) => {
        shipAttrubuteOptions.push(el);
      });
    }
    return shipAttrubuteOptions;
  }
  // function setShipAttribute(attribute, level, index) {
  //   const newShipCreationObject = { ...shipCreationObject };
  //   newShipCreationObject.attributes[index]({ name: attribute, level: level });
  //   setShipCreationObject(newShipCreationObject);
  // }

  // function setShipTier(tier) {}

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-64 w-auto"
            src="/spaceshipLogo.png"
            alt="Workflow"
            style={{
              imageRendering: "pixelated",
            }}
          />
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your ship
          </h1>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="rounded-md shadow-xl p-4 ">
            <div>
              {/* Ship name input */}
              <TextInput label={"Name The Ship"} />
              {/* Ship size select */}
              <SelectInput
                options={Object.keys(SHIP_SIZES)}
                label={"Select Ship Size"}
                currentValue={shipCreationObject.sizeCategory}
                setCurrentValue={setShipSize}
              />
            </div>
          </div>
          <div className="flex justify-around">
            <div className="w-16 h-16 bg-yellow-500 rounded-md shadow-xl text-white text-center leading-[4rem] text-4xl drop-shadow-xl">
              {shipCreationObject.damagePoints}
            </div>
            <div className="w-16 h-16 bg-red-500 rounded-md shadow-xl text-white text-center leading-[4rem] text-4xl drop-shadow-xl">
              {shipCreationObject.hullPoints}
            </div>
          </div>
          <div className="flex justify-between">
            <SliderInput
              // options={SHIP_ATTRIBUTES.positive.scaling.allShips}
              step={1}
              maxValue={shipCreationObject.maxDamagePoints}
              minValue={0}
              label={"Select damage points"}
              currentValue={shipCreationObject.damagePoints}
              setCurrentValue={setShipDamagePoints}
            />
            <SliderInput
              // options={SHIP_ATTRIBUTES.positive.scaling.allShips}
              step={1}
              maxValue={shipCreationObject.maxHullPoints}
              minValue={1}
              label={"Select hull points"}
              currentValue={shipCreationObject.hullPoints}
              setCurrentValue={setShipHullPoints}
            />
          </div>

          <div className="">
            {shipCreationObject.attributes.map((attribute, index) => {
              return (
                <div className="rounded-md shadow-xl p-4 ">
                  {shipCreationObject.attributes[index].name !== "Empty" ? (
                    <div className="w-8 h-8 bg-green-500 rounded-md shadow-xl"></div>
                  ) : (
                    <div className="w-8 h-8 bg-red-500 rounded-md shadow-xl"></div>
                  )}
                  <SelectInput
                    index={index}
                    options={createShipAttributeOptions(
                      shipCreationObject.sizeCategory
                    )}
                    label={"Select Attribute"}
                    currentValue={shipCreationObject.attributes[index].name}
                    setCurrentValue={setShipAttributeName}
                  />
                  {shipCreationObject.attributes[index].name !== "Empty" && (
                    <SliderInput
                      // options={SHIP_ATTRIBUTES.positive.scaling.allShips}
                      index={index}
                      step={1}
                      maxValue={shipCreationObject.maxAttributelevel}
                      minValue={0}
                      label={"Select Attribute level"}
                      currentValue={shipCreationObject.attributes[index].level}
                      setCurrentValue={setShipAttributeLevel}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}
