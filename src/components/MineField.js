import React from 'react'
import { StyleSheet, View } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, rIndex) => {
        const columns = row.map((field, fIndex) => {
            return <Field {...field} key={fIndex} onOpen={() => props.onOpenField(rIndex, fIndex)}
                        onSelect={e => props.onSelectField(rIndex, fIndex)} 
                        userLost={props.userLost} userWon={props.userWon} />
        })
        return <View style={styles.column} key={rIndex}>{columns}</View>
    })

    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    },
    column: {
        flexDirection: 'row'
    }
})