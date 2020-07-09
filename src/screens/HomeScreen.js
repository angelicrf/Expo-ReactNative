import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    //console.log(navigation);
    return(<View>
        <Text style={styles.text}>Angelique Expo Screen Initial</Text>
        <TouchableOpacity
            onPress={() => console.log(navigation.navigate('Image'))}
        >
            <Text>Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => console.log(navigation.navigate('Components'))}
        >
            <Text>Friends List</Text>
        </TouchableOpacity>

    </View>
    );
};

const styles = StyleSheet.create({
  text: {
        fontSize: 30,
        backgroundColor: "blue",       
  }
});

export default HomeScreen;
