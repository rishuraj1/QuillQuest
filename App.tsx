import {SafeAreaView} from 'react-native';
import React from 'react';
import Navigation from './src/navigation';

const App = (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1 bg-slate-400">
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
