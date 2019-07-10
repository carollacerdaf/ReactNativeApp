import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const { people, onPressItem } = props;
     
    const items = people.map(person => {
        return (
        <PeopleListItem 
            key={person.name.first} 
            person = { person }
            navigateToPeopleDetail={onPressItem}/>
        );
    });

    return(
        <View>
            { items }
        </View>
)
};

export default PeopleList;