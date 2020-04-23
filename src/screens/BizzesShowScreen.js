import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const BizzesShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const [biz, setBiz] = useState(null)

    const getBiz = async id => {
        const response = await yelp.get(`/${id}`)
        setBiz(response.data)
    }

    useEffect(() => {
        getBiz(id)
    }, [])

    if (!biz) return null;

    return <View>
        <Text>{biz.name}</Text>
        <FlatList
            data={biz.photos}
            keyExtractor={(photo) => photo}
            renderItem={({ item }) => {
                return <Image style={styles.image} source={{ uri: item }}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default BizzesShowScreen