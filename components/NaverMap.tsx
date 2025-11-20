"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: {
      maps: {
        LatLng: new (lat: number, lng: number) => unknown;
        Map: new (element: HTMLElement, options: unknown) => {
          setZoomable: (zoomable: boolean) => void;
          setDraggable: (draggable: boolean) => void;
        };
        Marker: new (options: {
          position: unknown;
          map: unknown;
          title: string;
        }) => unknown;
        InfoWindow: new (options: { content: string }) => {
          open: (map: unknown, marker: unknown) => void;
        };
        Position: {
          TOP_RIGHT: unknown;
        };
      };
    };
  }
}

interface NaverMapProps {
  className?: string;
}

export default function NaverMap({ className }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize map
    const initMap = () => {
      if (!mapRef.current || !window.naver) return;

      const { naver } = window;

      // 아늑호텔 앤 스파 서울 성수 건대점
      const location = new naver.maps.LatLng(37.5425, 127.0697);

      // Map options
      const mapOptions = {
        center: location,
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };

      // Create map
      const map = new naver.maps.Map(mapRef.current, mapOptions);

      // Create marker
      const marker = new naver.maps.Marker({
        position: location,
        map: map,
        title: "아늑호텔 앤 스파 서울 성수 건대점",
      });

      // Create info window
      const infoWindow = new naver.maps.InfoWindow({
        content:
          '<div style="padding:10px 15px;font-size:14px;font-weight:600;text-align:center;white-space:nowrap;color:#3B2415 !important;background:white;">아늑호텔 앤 스파<br/>서울 성수 건대점</div>',
      });

      // Show info window by default
      infoWindow.open(map, marker);
    };

    // Wait for Naver Maps SDK to load
    if (window.naver && window.naver.maps) {
      initMap();
    } else {
      const checkNaver = setInterval(() => {
        if (window.naver && window.naver.maps) {
          clearInterval(checkNaver);
          initMap();
        }
      }, 100);

      // Cleanup
      return () => clearInterval(checkNaver);
    }
  }, []);

  return <div ref={mapRef} className={className} />;
}
