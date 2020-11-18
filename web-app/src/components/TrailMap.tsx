import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

type MapModules = [typeof import("esri/WebMap"), typeof import("esri/views/MapView")];

export const TrailMap = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        (loadModules(['esri/Map', 'esri/views/MapView'], { css: true }) as Promise<MapModules>)
        .then(([ArcGISMap, MapView]) => {
          const map = new ArcGISMap({
            basemap: 'topo-vector'
          });

          // load the map view at the ref's DOM node
          if (mapRef.current) {
            const view = new MapView({
              container: mapRef.current,
              map: map,
              center: [-118, 34],
              zoom: 8
            });

            return () => {
              if (view) {
                // destroy the map view
                view.destroy();
              }
            };
          }

          return () => {};
        });
      }
    );

    return <div className="webmap" ref={mapRef} />;
};

export default TrailMap;