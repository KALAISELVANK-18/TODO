import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
    import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
  
const data = [
    { label: 'Engineering', value: 'Engineering' },
    { label: 'Sales', value: 'Sales' },
    { label: 'Documentation', value: 'Documentation' },
    { label: 'Web Design', value: 'Web Design' },
    { label: 'Hobbies', value: 'Hobbies' },
    { label: 'Functions', value: 'Functions' },
    { label: 'Others', value: 'Others' },
   
  ];


  interface DropdownComponentProps {
    category: string | null;
    setCategory: (value: string | null) => void;
  }
  const DropdownComponent = ({category, setCategory}: DropdownComponentProps) => {
   
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (category || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Category
          </Text>
        );
      }
      return null;
    };


    return (
      <View style={[styles.container]}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Category' : '...'}
          
          value={category}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCategory(item.value);
            setIsFocus(false);
          }}
          
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color:"black"
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });