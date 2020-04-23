import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const BizzesDetail = ({ biz }) => {
    return <View style={styles.container}>
        {/* we see nothing w image tag without styling, bec just like a view element, img tries to collapse itself / make it small as possible */}
        <Image style={styles.image} source={{ uri: biz.image_url }} />
        <Text style={styles.name}>{biz.name}</Text>
        <Text style={styles.rating}>{biz.rating} Stars, {biz.review_count} Reviews</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    }
})

export default BizzesDetail