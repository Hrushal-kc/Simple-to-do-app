/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StyleSheet, View, Text, FlatList, ImageBackground} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {useState} from 'react';
import GoalItem from './src/componets/Goalitems';
import GoalInput from './src/componets/GoalInput';
import image from './src/Assets/backround.jpeg';

const App = () => {
  const [courseGoals, setCoursegoals] = useState([]);

  function addbutton(enteredgoalText) {
    console.log(enteredgoalText);
    if (enteredgoalText !== '') {
      setCoursegoals((currentcourseGoals) => [
        ...currentcourseGoals,
        // {number : slNumber , id: Math.random().toString()},
        {text: enteredgoalText, id: Math.random().toString()},
      ]);
    }

    else{
      alert("Enter the Text");
    }
  }

  function deleteGoalHandler(id) {
    console.log('Delete');
    setCoursegoals((currentcourseGoals) => {
      return currentcourseGoals.filter((goal) => {
      if(goal.id !== id){
        return true
      }
      else {
        alert('you deleted a '+  goal.text);
        return false;
      }
      }
      );
    });
  }

  return (
    <View style={style.mainContainer}>
      <ImageBackground source={image} style={style.image}>
        <Text style={style.mainText}>"Succed With Your Goals"</Text>
        <View style={style.container}>
          <GoalInput onAddGoal={addbutton} />
          <View style={style.goalcontainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

style = StyleSheet.create({
  mainContainer: {
    //display: "flex",
    
    flex: 1,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    //opacity: 0.8,
  },

  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 5,
  },

  mainText: {
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color : "white"
  },

  goalcontainer: {
    // backgroundColor : "#89ABE3FF"
  },
});

export default App;
