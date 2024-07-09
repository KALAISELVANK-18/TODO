import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: RadioButtonOption[];
  onValueChange: (value: string) => void;
  selected:string
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, onValueChange, selected}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>((selected=="")?null:selected);
    
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onValueChange(value);
  };

  return (
    <View style={{flexDirection: "row",alignContent:"flex-start"}}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.radioButtonContainer}
          onPress={() => handleSelect(option.value)}
        >
          <View style={[styles.radioButton, selectedValue === option.value && styles.selected]}>
            {selectedValue === option.value && <View style={styles.innerCircle} />}
          </View>
          <Text style={styles.label}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent:'flex-start',
    marginVertical: 10,
    marginRight:10
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
    marginRight: 10,
  },
  selected: {
    borderColor: '#686bc5',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#686bc5',
  },
  label: {
    fontSize: 16,
    marginRight:15
  },
});

export default RadioButtonGroup;
