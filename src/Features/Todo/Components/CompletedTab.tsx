import React  from "react";


import { PropsWithChildren } from "react";


import {CardType, Priority, Status} from "../Types/TodoTypes";

import { UseSelector } from "react-redux";


import {

    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity

  } from 'react-native';


import { Colors } from "react-native/Libraries/NewAppScreen";


import Card from "../Components/Todo-Card";

import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import FloatingActionButton from "../../../Components/FloatingActionButton";

import { faEdit ,faTrash} from "@fortawesome/free-solid-svg-icons";

import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";



import { HomeNavigationProps, RootStackParamList, TodoTabProps} from "../../../types/AppTypes";

import { useDispatch, useSelector } from 'react-redux';
import { TabBarProps } from "react-native-tab-view";


function CompletedTabView({navigation}:HomeNavigationProps) : React.JSX.Element {





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


    const flag = 0;

    const dispatch = useDispatch();

    const formData = useSelector((state: RootState) => state.form.formData);
    

    

    const handleFabPress = () => {
        
        navigation.navigate('TodoForm')
      };

    return (
        <View>

            <ScrollView  style={{flexGrow:1, padding: 20}}>



            {
                formData.length === 0?
                <View style={{alignContent:"center",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"black", fontWeight:"bold",fontSize:20}}>

                        No Todo added!
                    
                </Text></View>

                :<View></View>
            }
            {
        

            formData.map((element: Task, index:number) =>{

            

            if(element)
                {
                    if(element.status=="Completed"){
                const parts = formData[index].duedate.split('/');
                const day = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1;
                const year = parseInt(parts[2], 10);
                
           return <Card 
            
            type={"Completed"}
           handleDelete = {()=>{
            dispatch(deleteTask(index));
           }}

           handleEdit={()=>{
            try{
            navigation.navigate('EditForm',{index:index});}
            catch(e){
              console.log(e);
            }
        }}

        handleStatus={()=>{}}
           
           title={element.title} 
           
           description={element.description} 
           
           priority={(element.priority=="Low"?Priority.Low : element.priority=="High" ?Priority.High:Priority.Medium)} 
           
           dueDate={new Date(year,month,day)} 
           
           status={Status.Completed} 
           
           category={element.category}
           index={index}
           >
            
            
            </Card>
            
        
        }
        else
        return <View></View>
    
    }

            else
            return <View></View>
}
            )
            
            }
            

            {/* <Card title="Study" description="Study physics" priority={Priority.High} dueDate={new Date('2024-07-01')} status={Status.Completed} category="Engineering">
            </Card>

            <Card title="Study" description="Study physics" priority={Priority.High} dueDate={new Date('2024-07-01')} status={Status.Completed} category="Engineering">
            </Card> */}

            

            <View style={{ height: 110 }} />

            </ScrollView>
            
            
       

        </View>
    );

}




export default CompletedTabView;




const styles = StyleSheet.create({

    text:{
        padding:20,
        color: Colors.white,
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'Courier New'
    }

  }
)