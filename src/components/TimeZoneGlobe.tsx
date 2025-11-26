"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// --- Types for our labels ---
type Location = {
  lat: number;
  lng: number;
  text: string;
};

const locations: Location[] = [
  { lat: 51.5074, lng: -0.1278, text: "UK" },
  { lat: 19.076, lng: 72.8777, text: "India" },
  { lat: 37.7749, lng: -122.4194, text: "USA" },
];

// Dynamic import so it only runs in the browser
const Globe: any = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

export default function TimeZoneGlobe() {
  const globeRef = useRef<any>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    controls.enableZoom = false;
    controls.enablePan = false;

    // Fix the distance so scroll wheel does not change size
    controls.minDistance = 230;
    controls.maxDistance = 230;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.7;

    // Center the globe roughly around India
    globeRef.current.pointOfView({ lat: 20, lng: 80, altitude: 1.7 }, 0);
  }, []);

  return (
    <div
      className="relative w-full h-56 flex items-center justify-center"
      style={{ cursor: isDragging ? "grabbing" : "grab" }} // 👈 white hand cursor
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      <Globe
        ref={globeRef}
        width={380}
        height={380}
        backgroundColor="rgba(0, 0, 0, 0)" // transparent
        globeImageUrl="/earth-day.png"
        showAtmosphere={true}
        atmosphereColor="#3a9cff"
        atmosphereAltitude={0.12}
        autoRotate={true}
        autoRotateSpeed={0.6}
        enablePointerInteraction={true}
        enableZoom={false}
        labelsData={locations}
        labelLat={(d: Location) => d.lat}
        labelLng={(d: Location) => d.lng}
        labelText={(d: Location) => d.text}
        labelSize={() => 1.1}
        labelColor={() => "#ffffff"}
      />
    </div>
  );
}
