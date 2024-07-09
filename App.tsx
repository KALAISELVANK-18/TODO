import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoForm from './src/Features/Todo/Screens/TodoForm';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Features/Todo/Services/StorageMedium';
import TodoScreen from './src/Features/Todo/Screens/Todoscreen';
import { Provider as PaperProvider } from 'react-native-paper';
import EditForm from './src/Features/Todo/Screens/EditForm';
import TodoScreenView from './src/Features/Todo/Components/TabComponent';

export type RootStackParamList = {
  Home: undefined;
  TodoForm: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false, // This hides the header for all screens
            }}>
            <Stack.Screen name="Home" component={TodoScreen} />
            <Stack.Screen name="TodoForm" component={TodoForm} />
            <Stack.Screen name="EditForm" component={EditForm} />
            <Stack.Screen name="TodoTab" component={TodoScreenView} />
          </Stack.Navigator>
        </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
