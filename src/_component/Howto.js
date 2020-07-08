import React from "react";

const HowTo = () => {
  return (
    <div className="how-to">
      <h1 style={{ marginLeft: "100px", color: "white" }}>
        Comment trouver le bon artisan ?
      </h1>
      <div className="step-container">
        <div className="step">
          <h2 style={{ color: "white" }}>Publiez votre projet</h2>
          <p style={{ color: "white" }}>
            Décrivez votre projet en quelques clics et sélectionnez vous-même
            les artisans avec qui vous souhaitez être mis en relation.
          </p>
        </div>
        <div className="step">
          <h2 style={{ color: "white" }}>Les artisans vous répondent</h2>
          <p style={{ color: "white" }}>
            Les artisans intéressés vous contactent par email.
          </p>
        </div>
        <div className="step">
          <h2 style={{ color: "white" }}>Choisissez les artisans</h2>
          <p style={{ color: "white" }}>
            Consultez les profils des artisans et sélectionnez les artisans que
            vous souhaitez rencontrer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowTo;
