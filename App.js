import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useDimensions } from 'react-native-hooks';

const App = () => {
  const ref = React.useRef();
  const { height, width } = useDimensions().window;
  const middleX = React.useMemo(() => width / 2, [width]);
  const middleY = React.useMemo(() => height / 2, [height]);
  const handlePress = async () => {
    if (ref) {
      try {
        // This value is correctly returned on iOS
        const point = await ref.current.coordinateForPoint({
          x: middleX,
          y: middleY,
        });
        alert(`Center of the map is: ${JSON.stringify(point)}`);
      } catch (err) {
        // This only gets thrown on Android
        console.log('Error retrieving point from coordinates', {
          middleX,
          middleY,
        });
      }
    }
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={ref}
        style={[styles.map, { width }]}
      />
      <SafeAreaView style={{ backgroundColor: 'green' }}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={{ color: 'white' }}>Print Center of Map</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    height: 40,
  },
});
