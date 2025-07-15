import React, { useState } from "react";
import "./hideable-component.scss";
import { printOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { chevronDownOutline } from "ionicons/icons"
import { ButtonDefault } from "../buttonDefault/buttonDefault";

export type HideableComponentProps = {
  children: React.ReactNode;
}

const HideableComponent = ({ children }: HideableComponentProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="order-filter-card" style={{ backgroundColor: isVisible ? 'white' : 'transparent' }}>
      <button
        className="toggle-button"
        onClick={() => setIsVisible(prev => !prev)}
      >
        {isVisible ? "OCULTAR" : "MOSTRAR"} <IonIcon
          icon={chevronDownOutline}
          size="small"
          className={isVisible ? "rotate-0" : "rotate-180"}
        />
      </button>

      <div className={`content-wrapper ${isVisible ? 'visible' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default HideableComponent;