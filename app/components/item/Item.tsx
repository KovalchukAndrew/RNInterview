import React from "react";
import {Text, View} from "react-native";
import {styles} from './styles'

export type ItemType = {
    id: string,
    level: number,
    label: string
}

export const Item = (props: ItemType) => {
    const ratingValues = [null, "explained", "understood", "implemented"]
    return (
        <>
            <View key={props.id} style={styles.container}>
                        <Text style={styles.itemLabel}>
                            {props.label}
                        </Text>
                        <View style={styles.ratingContainer}>
                            <View style={styles.rating}>
                                <View style={[styles.ratingItem, props.level > 0 ? {backgroundColor: "#00A7A9", borderRadius: 7}: {backgroundColor: "#E5E5E5",borderRadius: 7}]}></View>
                                <View style={[styles.ratingItem, props.level > 1 ? {backgroundColor: "#00A7A9", borderRadius: 7}: {backgroundColor: "#E5E5E5", borderRadius: 7}]}></View>
                                <View style={[styles.ratingItem, props.level > 2 ? {backgroundColor: "#00A7A9", borderRadius: 7}: {backgroundColor: "#E5E5E5", borderRadius: 7}]}></View>
                            </View>
                            <View>
                                <Text style={styles.ratingText}>
                                    {ratingValues[props.level]}
                                </Text>
                            </View>
                        </View>

                    </View>

        </>
    )
}

