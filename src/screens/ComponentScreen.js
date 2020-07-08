import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ComponentScreen = () => {
    const friends = [
        { name: 'Adam', id: '1' },
        { name: 'Anna', id: '2' },
        { name: 'Brian', id: '3' },
        { name: 'Kile', id: '4'},
        { name: 'Jack', id: '5' }
    ]

    return (
        <FlatList
            data={friends}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name}</Text>
            }}           
        />)
          
};
const styles = StyleSheet.create({
    textStyle: {
        backgroundColor: "lime",
        fontSize: 25,
        fontWeight: "bold"
    }
})
export default ComponentScreen;
