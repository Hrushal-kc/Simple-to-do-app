import React from 'react';
import {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const GoalInput = (props) => {
  const [enteredgoalText, setEnteredgoalText] = useState('');
  const [slNumber, setslNumber] = useState(1);

  function goalinputTaker(enteredText) {
    setEnteredgoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredgoalText , slNumber);
    setEnteredgoalText('');
    if (enteredgoalText !== '') {
      setslNumber(slNumber + 1);
      console.log(slNumber);
    }
  }

  return (
    <View style={style.inputtext}>
      <TextInput
        placeholder="Enter the Goal"
        style={style.textinput}
        onChangeText={goalinputTaker}
        value={enteredgoalText}></TextInput>
      <TouchableOpacity style={style.button} onPress={addGoalHandler}>
        <Text>Add Goal</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoalInput;

const style = StyleSheet.create({
  inputtext: {
    //flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginBottom: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },

  textinput: {
    // borderWidth: 2,
    borderColor: 'black',
    width: 290,
    color: 'black',
    // backgroundColor : "#89ABE3FF",
    backgroundColor: 'gray',
    fontSize: 20,
    borderRadius: 5,
    height: 50,
    justifyContent: 'flex-start',
  },

  button: {
    alignSelf: 'center',
    backgroundColor: 'orange',
    padding: 15,
    marginLeft: 10,
    borderRadius: 5,
    justifyContent: 'flex-end',
  },
});
