
// Team Eta - Weather Dummy App
// basic app structure by aryan it contains non clickable buttons and simple ui..

import React, {useState }from  "react";
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
  const [weather, setWeather] = useState<Weather[]>(initialData);


  return (
    <View >
      <Text > Team Eta - Weather Dummy App</Text>

      <ScrollView>
        {weather.map((item, index) => (
          <View key={index} style={styles.card}>
                 <Text> {item.city}</Text>
            <Text >{item.temp}°C</Text>
            <Text >{item.condition}</Text>
          </View>
        ))}
      </ScrollView>

      <View>
        <Button title="🔄 Refresh Weather"  />
      </View>

      <Text >Made by Aryan & Anshika</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

  button: {marginTop: 10 },
  footer: { marginTop: 20, textAlign: "center", color: "gray" },
});

export default App;