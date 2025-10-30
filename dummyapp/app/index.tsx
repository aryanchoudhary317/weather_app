
// Team Eta - Weather Dummy App
// Aryan (Data) + Anshika (Refresh + Layout)

import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

interface Weather {
  city: string;
  temp: number;
  condition: string;
}

const App: React.FC = () => {
 
  const initialData: Weather[] = [
     { city: "Delhi", temp: 32, condition: "Sunny" },
  { city: "Mumbai", temp: 29, condition: "Cloudy" },
    { city: "Shimla", temp: 18, condition: "Rainy" },
  ];

 a
  const [weather, setWeather] = useState<Weather[]>(initialData);

  
  const refreshWeather = () => { //refresh button 
    
   const updated = weather.map((item) => ({
      ...item, 
      temp: item.temp + Math.floor(Math.random() * 5) - 2,
    }));
    
   
    setWeather(updated);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}> Team Eta - Weather Dummy App</Text>

      <ScrollView>
        {weather.map((item, index) => (
    <View key={index} style={styles.card}>
         <Text style={styles.city}>{item.city}</Text>
            <Text style={styles.temp}>{item.temp}°C</Text>
   <Text style={styles.cond}>{item.condition}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.button}>
        <Button title="Refresh Weather" onPress={refreshWeather} />
      </View>

      <Text style={styles.footer}>Made by Aryan & Anshika</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
   textAlign: "center",
  marginBottom: 20,
    color: "blue",
  },
  card: {
    backgroundColor: "#BBDEFB",
  padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  city: { fontSize: 20, fontWeight: "bold" },
 temp: { fontSize: 18 },
  cond: { fontSize: 16 },
 button: { marginTop: 10 },
  footer: { marginTop: 20, textAlign: "center", color: "gray" },
});

export default App;