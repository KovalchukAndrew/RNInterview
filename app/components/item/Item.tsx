import React from "react";
import {Text, View} from "react-native";
import {styles} from './styles'
import {Rating} from "../rating/Rating";

export type ItemType = {
    id: string,
    level: number,
    label: string
}

export const Item = (props: ItemType) => {
    return (
        <>
            <View key={props.id} style={styles.container}>
                        <Text style={styles.itemLabel}>
                            {props.label}
                        </Text>
                        <Rating level={props.level}/>
                    </View>

        </>
    )
}

