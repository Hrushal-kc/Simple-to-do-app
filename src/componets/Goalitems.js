import React from 'react';

import {StyleSheet, Text, Pressable, View} from 'react-native';

const GoalItem = (props) => {




  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      android_ripple={{color: 'purple'}}>
      <View style={style.goallist}>
        <View style={style.goalitems}>
        <Text style={style.goalText}>{props.text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  goalitems: {
    justifyContent: 'space-evenly',
    // borderWidth: 2,
    padding: 10,
    margin: 2,
    borderRadius: 10,
    backgroundColor : "#C0C0C0",
    // backgroundColor: '#EA738DFF',
    opacity : 0.8
  },

  goalText: {
    fontStyle: 'normal',
    color: 'black',
    fontSize: 20,
    fontWeight : "bold",
    opacity : 1
  },

  goallist : {
    // backgroundColor : "#89ABE3FF"
  }
});

export default GoalItem;
