import * as React from 'react';
import { View, useWindowDimensions, StyleSheet, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TodoScreen from '../Screens/Todoscreen';


import { HomeNavigationProps, TodoTabProps } from '../../../types/AppTypes';
import TodoTabView from './TabComponent';
import CompletedTabView from './CompletedTab';

const FirstRoute = ({ navigation}) => <TodoTabView navigation={navigation}/>;
const SecondRoute = ({ navigation}) => <CompletedTabView navigation={navigation}/>;

export default function TabViewComp({ navigation}:TodoTabProps) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'All' },
    { key: 'second', title: 'Completed' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute navigation={navigation}/>;
      case 'second':
        return <SecondRoute navigation={navigation}/>;
      default:
        return null;
    }
  };

  return (
    <TabView
      style={{}}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'black' }}
          style={{ backgroundColor: 'rgba(0,0,0, 0)', shadowColor: 'rgba(0,0,0, 0)', borderBottomColor: 'black' }}
          labelStyle={{ color: 'black', fontWeight: 'bold' }}
        />
      )}
    />
  );
}
