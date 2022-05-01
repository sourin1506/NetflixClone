import React from "react";
import "./skeleton.css";

export default function SkeletonCards({ circle }) {
  return (
    <div
      className={`skeleton-wrapper${circle ? " skeleton-wrapper-circle" : ""}`}
    >
      <div className="skeleton">
        <div className="skeleton-indicator" />
      </div>
    </div>
  );
}
