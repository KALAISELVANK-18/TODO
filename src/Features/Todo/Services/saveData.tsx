import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


// interface Person {
//     title: string;
//     description: string;
//     category:string;
//     duedate:string,

// }


const saveFormData = (data: string[]) => ({
        type: 'SAVE_TASK',
        payload: data
      });


