/** @format */

import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet
} from 'react-native';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{
          false: 'blueViolet',
          true: 'blueViolet'

          
        }}
        thumbColor={isEnabled ? 'blueviolet' :
        '#fcfcfc'}
        // ios_backgroundColor: '#3e3e3e',
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default SettingsScreen;