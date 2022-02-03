import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

import {TEST_DATA} from './shared/Constants'
import Level from "./components/Level";


const App = () => {

  return (
    <ScrollView>
      <Level
          label={TEST_DATA[0].label}
          subtitle={TEST_DATA[0].subtitle}
          items={TEST_DATA[0].items}
          progress={TEST_DATA[0].progress}
          />
      <Level
          label={TEST_DATA[1].label}
          subtitle={TEST_DATA[1].subtitle}
          items={TEST_DATA[1].items}
          progress={TEST_DATA[1].progress}
      />
    </ScrollView>
  );
};


export default App;
