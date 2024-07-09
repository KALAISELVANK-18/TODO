// TodoForm.js

import React, { useReducer, useState, useRef} from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faArrowLeft,faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { Text } from 'react-native';
import { EditTodoFormNavigationProps } from '../../../types/AppTypes';
import DropdownComponent from '../Components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RadioButtonGroup from '../Components/RadioButton';
import { useDispatch, useSelector } from 'react-redux';
import SnackbarComponent from '../../../Components/Snackbar';

import { useEffect } from 'react';


const updateFormData = (index:number,updatedTask: Task) => ({
    type: 'EDIT_TASK',
    payload: {index, updatedTask}
  });


interface Task{
    title: string,
    description:string,
    status:string,
    category:string,
    duedate:string,
    priority:string
}

function EditForm({navigation,route}:EditTodoFormNavigationProps) : React.JSX.Element{




    const index =route.params.index;



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



const formData = useSelector((state: RootState) => state.form.formData);



const parts = formData[index].duedate.split('/');
const day = parseInt(parts[0], 10);
const month = parseInt(parts[1], 10) - 1;
const year = parseInt(parts[2], 10);
const [title, setTitle] = useState(formData[index].title);
const [description, setDescription] = useState(formData[index].description);
const [status, setStatus] = useState(formData[index].status);
const [category, setCategory] = useState<string | null>(formData[index].category);
const [dueDate, setDueDate] = useState<Date>(new Date(year,month,day));
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [selectedRadio, setSelectedRadio] = useState<string | null>(formData[index].priority);


console.log(formData[index].duedate);
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState<Task>();
  const isMounted = useRef(false);

  useEffect(() => {
    
    if(isMounted.current){
    dispatch(updateFormData(index,inputData!));
    setSnackbarMessage('Task added successfully!');
    setSnackbarVisible(true);
    navigation.goBack();}
    else{
        isMounted.current=true;
    }
  }, [inputData]);

  const handleSave = () => {
    if(title!=""&& description!="" && category!="" && dueDate.toLocaleDateString()!="" && selectedRadio!=""){
    const temp: Task = {"title":title,"description":description,"category": category!,"duedate": dueDate.toLocaleDateString(),"priority":selectedRadio!,"status":status};

    setInputData(temp);
    
    
    setSnackbarVisible(true);
    
    
    //navigation.goBack();
    
    }
    else{
        setSnackbarMessage('please enter all fields!');
      setSnackbarVisible(true);
    }
  };


  
  const handleBackPress = () => {
        
    navigation.goBack();
  };

  const handleRadioButtonChange = (value: string) => {
    setSelectedRadio(value);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate:Date) => {
    setDueDate(selectedDate);
    hideDatePicker();
  };

  const radioOptions = [
    { label: 'High', value: 'High' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Low', value: 'Low' },
  ];


  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  return (

    <View style={styles.form}>

        <View style={{flexDirection:"row",backgroundColor:"#686bc5",padding:20,alignContent:'center',alignItems:'center'}}>

        <TouchableOpacity onPress={handleBackPress}>

            <FontAwesomeIcon icon={faArrowLeft} color='white' size={20}></FontAwesomeIcon>
            </TouchableOpacity> 
        

            <Text style={{color:"white",paddingLeft:15,fontSize:20,fontWeight:'bold'}}>
                   Edit Task
            </Text>


        </View>


        <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

        <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />

      <View style={{paddingTop:20}}>

      <DropdownComponent category={category} setCategory={setCategory}></DropdownComponent>
      </View>
      

      
      
      <View style={{flexDirection:'row',alignItems:'center',paddingTop:10}}>
            <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>   Due Date</Text>
            <TouchableOpacity onPress={showDatePicker} style={{flexDirection:"row",alignItems:"center"}}>
            <TextInput
            editable={false}
            style={styles.input}
            placeholder="Due Date"
            value={dueDate.toLocaleDateString()}/>
            

            <FontAwesomeIcon icon={faCalendarDay} color='#686bc5' size={20}/>
            </TouchableOpacity>
      </View>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        minimumDate={new Date(2000, 1, 1)}
        maximumDate={new Date(2030, 11, 31)}
        is24Hour={true}
      />

        <View style={{
            padding:15,
            justifyContent: 'flex-start',
            alignItems: 'flex-start' }}>

            <Text style={{fontSize: 18,color:"black",fontWeight:'bold'}}>Priority</Text>
            <RadioButtonGroup options={radioOptions} onValueChange={handleRadioButtonChange} selected={formData[index].priority}/>
        </View>



        <View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>

        <TouchableOpacity style={{backgroundColor:"#686bc5",margin:30,borderRadius:10,}}

        onPress={()=>navigation.goBack()}
        >
        <View style={{flexDirection:"row",justifyContent:"center",backgroundColor:"tomato",borderRadius:10,padding:10}}>
            <Text style={{fontSize: 18,color:"white",fontWeight:'bold'}}>Cancel</Text>
        </View>
        </TouchableOpacity>


        <TouchableOpacity style={{backgroundColor:"#686bc5",margin:30,borderRadius:10,}}

        onPress={handleSave}
        >
        <View style={{flexDirection:"row",justifyContent:"center",backgroundColor:"#686bc5",borderRadius:10,padding:10}}>
            <Text style={{fontSize: 18,color:"white",fontWeight:'bold'}}>Edit</Text>
        </View>
        </TouchableOpacity>

        <SnackbarComponent
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        message={snackbarMessage}
      />
        </View>
        
    
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    
   backgroundColor:"white",
   flex:1
   
    
  },
  input: {
    margin: 20,
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    color:'black',
    fontWeight:'bold'
  },

  appBar:{
    /* Add Button */

    color:"black"
  }
});

export default EditForm;
