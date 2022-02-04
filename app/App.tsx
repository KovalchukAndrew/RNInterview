import React from 'react';
import {TEST_DATA} from './shared/Constants'
import { ScrollView } from 'react-native';
import Level from "./components/level/Level";

const App = () => {

  return (
    <ScrollView>

        {
            TEST_DATA.map(el => {
                return <Level
                    key={el.id}
                    label={el.label}
                    subtitle={el.subtitle}
                    items={el.items}
                    progress={el.progress}
                />
            })
        }
    </ScrollView>
  );
};

export default App;
