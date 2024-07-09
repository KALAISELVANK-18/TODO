import React from 'react';

import TabViewcomp from '../Components/Tab';





import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';



import { Colors } from "react-native/Libraries/NewAppScreen";



import Card from "../Components/Todo-Card";

import { StackNavigationProp } from '@react-navigation/stack';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import FloatingActionButton from "../../../Components/FloatingActionButton";

import { faEdit ,faTrash} from "@fortawesome/free-solid-svg-icons";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import TodoForm from "./TodoForm";

import { HomeNavigationProps, RootStackParamList} from "../../../types/AppTypes";

import { useDispatch, useSelector } from 'react-redux';

import TodoScreenView from "../Components/TabComponent";


function TodoScreen({navigation}:HomeNavigationProps) : React.JSX.Element {


    const deleteTask = (index:number) => ({
        type: 'DELETE_TASK',
        payload: index
      });

    interface Task{
        title: string,
        description:string,
        status:string,
        category:string,
        duedate:string,
        priority:string
    }

    interface FormState {
        formData: Task[];
      }
    
      interface RootState {
        form: FormState;
      }


    const dispatch = useDispatch();

    const formData = useSelector((state: RootState) => state.form.formData);
    

    
    const handleFabPress = () => {
        
        navigation.navigate('TodoForm')
      };

    return (
        <View style={styles.screenview}>

            <View style={styles.appbar}>
                <Text style={styles.text}>
                   Todo App
                </Text>
                
            </View>

           

            
            {/* <WebViewComponent url="https://reactnative.dev/"></WebViewComponent> */}
            {/* <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} /> */}

        <TabViewcomp navigation={navigation}></TabViewcomp>

        {/* <WebViewComponent url="https://pub.dev"></WebViewComponent> */}
        
        <FloatingActionButton onPress={handleFabPress} />
        </View>
    );

}




export default TodoScreen;




const styles = StyleSheet.create({

    screenview :{
        flex:1,
        margin:0,
        flexDirection: "column",
        backgroundColor:"#D6D7EF"
        
    },

    appbar: {
        flexDirection:"row",
        paddingBottom:20,
        alignContent:"center",
        color:Colors.black,
        backgroundColor:'#686bc5',
        
    },

    text:{
        padding:20,
        color: Colors.white,
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Courier New'
    }

  }
)