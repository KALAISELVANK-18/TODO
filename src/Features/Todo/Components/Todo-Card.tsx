import React  from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { PropsWithChildren } from "react";
import { useState,  useEffect, useRef} from "react";
import {CardType, Priority} from "../Types/TodoTypes";
import { Alert } from "react-native";
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Modal,
    TouchableOpacity
  } from 'react-native';

import { Colors } from "react-native/Libraries/NewAppScreen";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";



import { faEdit ,faTrash} from "@fortawesome/free-solid-svg-icons";



const Updatestatus = (index:number,status:string) => ({
        
    type: 'UPDATESTATUS_TASK',
    payload: {index, status}

  });
  function Card({title,description,priority,dueDate,status,children,category,index,handleEdit,handleDelete,type,handleStatus}:CardType) : React.JSX.Element {


    const [modalVisible, setModalVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState(status);

    const statuses = ['Pending', 'Inprogress', 'Completed'];
    const dispatch = useDispatch();
    

  const isMounted = useRef(false);

  useEffect(() => {
    
    if(isMounted.current){
    dispatch(Updatestatus(index,selectedStatus));
    }
    else{
        isMounted.current=true;
    }
  }, [selectedStatus]);

  const handleStatusChange = (status) => {
    
    setSelectedStatus(status);
    // Perform additional actions if needed
    console.log('Selected Status:', selectedStatus);

    
  };

    
    return(
        <View style={{backgroundColor:"white",marginVertical:20,
        padding:20,borderRadius:10,alignContent:"space-between"}}>
        <View style={styles.cardview}>
                
            <View style={styles.textview}>

            <Text style={styles.title}>
                {title}
            </Text> 

            <Text style={styles.description}>
                {description}

            </Text> 
            

            </View>

            <View style={{flexDirection:"row",paddingRight:40}}>

            {(status!="Completed")?
            <TouchableOpacity onPress={handleEdit}>
            <FontAwesomeIcon icon={faEdit} style={{color:"black",paddingRight:60}}></FontAwesomeIcon>
            </TouchableOpacity>
            
            :<View></View>
            }



            
            
            <TouchableOpacity onPress={handleDelete}>
            <FontAwesomeIcon icon={faTrash} style={{color:"black"}}></FontAwesomeIcon>
            </TouchableOpacity>    

            </View>
            
            
            <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.overlay}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Set Status</Text>
            {statuses.map((status, index) => (
              <TouchableOpacity
                key={index}
                style={styles.radioContainer}
                onPress={() => handleStatusChange(status)}
              >
                <View style={styles.radioCircle}>
                  {selectedStatus === status && (
                    <View style={styles.selectedRb} />
                  )}
                </View>
                <Text style={styles.radioText}>{status}</Text>
              </TouchableOpacity>
            ))}
            <Button
              title="OK"
              onPress={() => {
                
                
                
                // dispatch(Updatestatus(index,status));
                
                setModalVisible(false);}}
            />
          </View>
        </View>
        </View>
      </Modal>


            {(status!="Completed" && type=="All")?

            <TouchableOpacity

            onPress={() => setModalVisible(true)}
            >
            <View style={{backgroundColor:(status=="Completed")?"lightgreen":(status=="Pending")?"orange":"skyblue",paddingHorizontal:10,paddingVertical:5,borderRadius:10}}>

            <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>{status}</Text>

            </View>
            </TouchableOpacity>:
            
            <View style={{backgroundColor:"lightgreen",paddingHorizontal:10,paddingVertical:5,borderRadius:10}}>

            <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>Completed</Text>

            </View>
            }
            

        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>

        <Text style={{color:"black",fontSize:15,padding:5,fontWeight:"bold"}}>
                Due on {dueDate.toLocaleDateString()}

        </Text> 

        <View style={{backgroundColor:"#6495ed",paddingHorizontal:10,paddingVertical:5,borderRadius:10,marginLeft:5}}>

        <Text style={{color:"white",fontSize:15,fontWeight:"bold"}}>{category}</Text>

        </View>

        <View style={{borderColor:"black",borderWidth:1,paddingHorizontal:10,paddingVertical:5,borderRadius:10,marginLeft:5}}>

        <Text style={{color:"black",fontSize:15,fontWeight:"bold"}}>{priority}</Text>

        </View>

        </View>
        
        </View>

    );
  }


  const styles = StyleSheet.create({

    cardview :{
        alignItems:"center",
        justifyContent:"space-between",
        
        flexDirection: "row",
        
        marginBottom:10,
        shadowColor:Colors.white,
    },


    textview : {
        padding:5,
        flexDirection: "column",
        color:Colors.black,
        
    },


    title:{
        color:Colors.black,
        fontSize:30,
        fontWeight:"bold"
    },


    description:{
        color:Colors.black,
        fontSize:15
    },

    status: {
backgroundColor:"black"
    },




    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal:50,
        paddingVertical:20,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      radioText: {
        marginLeft: 10,
      },
      radioCircle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      selectedRb: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#000',
      },

      overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
      },

  })



  export default Card;