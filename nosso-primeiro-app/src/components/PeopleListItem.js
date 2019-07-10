import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import { capitalizeFirstLetter } from '../util';

const PeopleListItem = props => {
    const { person , navigateToPeopleDetail} = props;
    const {title, first, last} = person.name;
    return (
        <TouchableOpacity onPress={() => {
            navigateToPeopleDetail();
        }}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: person.picture.thumbnail }} />
                <Text style={styles.lineText}>
                    { `${
                        capitalizeFirstLetter(first)
                    } ${
                        capitalizeFirstLetter(last)
                        }` }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line : {
        height : 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText : {
        fontSize: 16,
        paddingLeft: 10,
        flex: 7
    },
    avatar : {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 10,
        borderRadius: 50
    }
})

export default PeopleListItem;