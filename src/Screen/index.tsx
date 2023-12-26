// Import necessary React and React Native components
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Create a functional component
const HelloWorldApp = () => {
  return (
    // Use View component as a container
    <View style={styles.container}>
      {/* Display a Text component with "Hello, World!" */}
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Export the component for use in other parts of the application
export default HelloWorldApp;
