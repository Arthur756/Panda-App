import React from "react";
import { View, Text }from 'react-native';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 10,
      width: '85%',
      backgroundColor: "#e0e0de",
      borderRadius: 150,
      marginLeft: '2rem',
      marginTop: '2.5rem',
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
    }

    const values = {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0.2rem'
    }
  
    const value = {
        fontSize: '0.95rem',
        fontWeight: '500',
        right: '0'
    }

    return (
      <View style={containerStyles}>
        <View style={fillerStyles}>
          <span style={labelStyles}></span>
        </View>
        <View style={values}>
            <Text style={value}>R$ {props.havingTarget}</Text>
            <Text style={value}>R$ {props.totalTarget}</Text>

        </View>
      </View>
    );
  };
  
export default ProgressBar;