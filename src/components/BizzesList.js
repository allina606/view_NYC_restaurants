import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import BizzesDetail from './BizzesDetail'
import { withNavigation } from 'react-navigation'

const BizzesList = ({ title, bizzes, navigation }) => {
    if (!bizzes.length) {
        return null
    }
    
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        {/* <Text>{bizzes.length}</Text> */}
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={bizzes}
            keyExtractor={ (bizzes) => bizzes.id }
            renderItem = {({ item }) => {
                 return (
                    <TouchableOpacity onPress={ () => navigation.navigate('BizzesShow', { id: item.id }) }>
                        <BizzesDetail biz={item}/>
                    </TouchableOpacity>
                 )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})

export default withNavigation(BizzesList)