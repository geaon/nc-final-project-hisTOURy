import React from "react";
import { Text, View } from "react-native";
import InteractiveMap from "../components/InteractiveMap";
import useCurrentLocation from "../hooks/useCurrentLocation";

export default function map() {
  const { location, isPending, error } = useCurrentLocation();

  if (isPending) return <Text>Pending...</Text>;
  if (error) return <Text>{JSON.stringify(error)}</Text>;
  if (!location) return <Text>No Location</Text>;

  const longLat = [location.longitude, location.latitude];
  console.log({ isPending, longLat, location });

  return (
    <View style={{height: 300}}>
      <InteractiveMap coords={longLat} distance={1000} />
    </View>
  );
}
