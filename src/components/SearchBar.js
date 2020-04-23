import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.iconStyle} />
        {/* no default styling here  */}
        <TextInput 
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search" 
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            // shorthand of above: onChameText={onTermChange}
            onEndEditing={() => onTermSubmit()}
            // // shorthand of above: onChameEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginVertical: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        // defualt is 14
        fontSize: 18
    },
    iconStyle: {
        // fontSize sounds odd but thats how to declare size of icon
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar