// FloatingActionButton.tsx

import React from 'react';
import { TouchableOpacity, StyleSheet, Text, ViewStyle, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface FloatingActionButtonProps {
  onPress: () => void;
  style?: ViewStyle;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onPress, style }) => {
  return (
    <View>

<TouchableOpacity style={[styles.fab, style]} onPress={onPress}>
      <FontAwesomeIcon icon={faPlus} style={styles.fabIcon} size={20}/>
    </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#686bc5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    right: 25,
    bottom: 30,
  },
  fabIcon: {
    color: 'white',
    fontSize:25
  },
});

export default FloatingActionButton;
