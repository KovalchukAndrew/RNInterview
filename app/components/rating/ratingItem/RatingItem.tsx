import React from "react";
import {styles} from "../styles";
import {View} from "react-native";

export type RatingItemType = {
    isChecked: boolean
}

export const RatingItem = (props: RatingItemType) => {

    const greenStyle = {backgroundColor: "#00A7A9"}
    const greyStyle = {backgroundColor: "#E5E5E5"}

    return <>
            <View style={[styles.ratingItem, props.isChecked ? greenStyle : greyStyle]}></View>
        </>

}
