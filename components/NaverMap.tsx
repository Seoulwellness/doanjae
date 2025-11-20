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
        Event: {
          addListener: (
            target: unknown,
            event: string,
            handler: () => void
          ) => void;
        };
      };
    };
  }
}

interface NaverMapProps {
  className?: string;
  latitude: number;
  longitude: number;
}

export default function NaverMap({
  className,
  latitude,
  longitude,
}: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const naverMapUrl = "https://naver.me/x7jilCRR";

  useEffect(() => {
    // Initialize map
    const initMap = () => {
      if (!mapRef.current || !window.naver) return;

      const { naver } = window;

      const location = new naver.maps.LatLng(latitude, longitude);

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

      // Create info window with clickable link
      const infoWindow = new naver.maps.InfoWindow({
        content: `<div style="padding:10px 15px;font-size:14px;font-weight:600;text-align:center;white-space:nowrap;color:#3B2415 !important;background:white;">
          <a href="${naverMapUrl}" target="_blank" rel="noopener noreferrer" style="color:#3B2415;text-decoration:none;">
            아늑호텔 앤 스파<br/>서울 성수 건대점<br/>
            <span style="font-size:11px;color:#666;">네이버 지도에서 보기</span>
          </a>
        </div>`,
      });

      // Show info window by default
      infoWindow.open(map, marker);

      // Make map clickable to open Naver Maps
      naver.maps.Event.addListener(map, "click", () => {
        window.open(naverMapUrl, "_blank", "noopener,noreferrer");
      });
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
  }, [latitude, longitude, naverMapUrl]);

  return (
    <a
      href={naverMapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
      aria-label="네이버 지도에서 위치 보기"
    >
      <div ref={mapRef} className={className} />
    </a>
  );
}
