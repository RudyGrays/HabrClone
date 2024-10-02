import { FC, memo } from "react";
interface MapProps {
  someClasses?: string;
}

const Map: FC<MapProps> = memo(({ someClasses, ...props }) => {
  return null;
  // return (
  //   <MapContainer
  //     center={[57.1522, 65.5272]}
  //     zoom={20}
  //     style={{ height: "100%", width: "100%" }}
  //   >
  //     <TileLayer
  //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  //       attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //     />
  //   </MapContainer>
  // );
});

export { Map };
