import React from "react";
import WorkshopSection from "./Components/WorkshopSection"; // Ensure correct path

function Workshop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/70 grid place-items-center mx-28 md:mx-28 sm:mx-6 xs:mx-4">
      <WorkshopSection />
    </div>
  );
}

export default Workshop;