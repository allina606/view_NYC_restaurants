import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useBizzes from '../hooks/useBizzes'
import BizzesList from '../components/BizzesList'

const SearchScreen = () => {
    // '' is the default value on useState hook
    const [term, setTerm] = useState('')
    const [searchApi, bizzes, errorMessage] = useBizzes()

    const filterBizzesByPrice = ( price ) => {
        return bizzes.filter( biz => {
            return biz.price == price
        })
    }
    
    return <View style={styles.backgroundStyle}>
        <SearchBar 
            term={term}
            onTermChange={newTerm => setTerm(newTerm)}
            // we dont include paranethesis when passing like this, bec we are passing reference to the func here, instead of calling it
            onTermSubmit={() => searchApi({ term })}
        />

        {/* following statement works bec an empty string is a "falsey" value, and a non-empty string is a "truthy" value */}
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        <ScrollView>
            <BizzesList bizzes={filterBizzesByPrice('$')} title='Cost Effective'/>
            <BizzesList bizzes={filterBizzesByPrice('$$')} title='Bit Pricier'/>
            <BizzesList bizzes={filterBizzesByPrice('$$$')} title='Big Spender'/>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFF',
        flex: 1
    }
})

export default SearchScreen