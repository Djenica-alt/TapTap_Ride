import { useEffect, useRef } from 'react';

export default function GoogleMap({ 
  lat = 48.8566, 
  lng = 2.3522, 
  zoom = 15,
  className = ''
}) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Check if Google Maps API is already loaded
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        initializeMap();
      };
      document.body.appendChild(script);
    } else {
      initializeMap();
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  const initializeMap = () => {
    if (mapRef.current) {
      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: zoom,
      });

      // Add a marker at the center
      new window.google.maps.Marker({
        position: { lat, lng },
        map: mapInstanceRef.current,
        title: 'Marker',
      });
    }
  };

  return (
    <div
      ref={mapRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '28px',
        ...(!className && { margin: '20px 0' })
      }}
    />
  );
}
