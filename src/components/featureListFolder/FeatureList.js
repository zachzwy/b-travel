import React, { useContext } from "react";
import MyContext from "../../context";
import Feature from "./Feature";

const FeatureList = () => {
  const { state } = useContext(MyContext);
  const { featureList } = state;

  return (
    <div className="feature-list">
      {featureList.map((feature, i) => (
        <Feature key={i} feature={feature} isOdd={i % 2} />
      ))}
    </div>
  );
};

export default FeatureList;
