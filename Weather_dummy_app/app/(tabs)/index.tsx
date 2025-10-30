import React, { useState } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState('Old Data');

  const handleRefresh = async () => {
    setRefreshing(true);
    // Simulate fetching or updating data (e.g., API call)
    setTimeout(() => {
      setData('New Data ' + new Date().toLocaleTimeString());
      setRefreshing(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{data}</Text>

      {refreshing ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <Button title="🔄 Refresh" onPress={handleRefresh} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
