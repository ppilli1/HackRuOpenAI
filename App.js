import { Provider } from "react-redux"
import {store} from "./store"
import {SafeAreaProvider} from "react-native-safe-area-context"
import React, {Component} from "react"
import { KeyboardAvoidingView, Platform } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import MapScreen from "./screens/MapScreen"
//import pyexecjs from 'pyexecjs'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            style = {{flex: 1}}
            behavior = {Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}