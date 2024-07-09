import {combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
// Initial state and reducer for form data

import { legacy_createStore } from 'redux';
const initialState = {
  formData: []
};



interface Task{
  title: string,
  description:string,
  status:string,
  category:string,
  duedate:string,
  priority:string
}


const formReducer = (state = initialState, action) => {
  
   
  switch (action.type) {
    case 'SAVE_TASK':
      console.log("________________________");
      console.log(state)
      return {
       
        formData: [...state.formData, action.payload]
      };


    case "RESET_STATE":
      return initialState;


      case 'EDIT_TASK':
        const { index, updatedTask } = action.payload;
        const updatedFormData:Task[] = [...state.formData];
        updatedFormData[index] = updatedTask;
        console.log(updatedFormData[index]);
        return {
          ...state,
          formData: updatedFormData
        };

      case 'DELETE_TASK':
      const deleteIndex = action.payload;
      return {
        ...state,
        formData: state.formData.filter((_, i) => i !== deleteIndex)
      };

      case 'UPDATESTATUS_TASK':
        const { updateIndex, updatedStatus } = action.payload;
        const updatedForm:Task[] = [...state.formData];
        // updatedForm[updateIndex].status = updatedStatus;
        console.log(updateIndex);
        return {
          ...state,
          formData: updatedForm
        };

    default:
      return state;
  }
};


const rootReducer = combineReducers({
  form: formReducer
});


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['form'] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = legacy_createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
