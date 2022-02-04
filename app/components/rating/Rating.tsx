import React from "react";
import {Text, View} from "react-native";
import {styles} from './styles'
import {RatingItem} from "./ratingItem/RatingItem";

export type RatingType = {
    level: number,
}

export const Rating = (props: RatingType) => {
    const ratingLevelNames: {[key: number]: string} = {
        1: "explained",
        2: "understood",
        3: "implemented"
    }
    const isRatingLevelNameVisible = (level: number) => {
        return level > 0
    }
    const maxRatingLevel = 3
    var ratingItems = [];

    for(let i = 0; i < maxRatingLevel; i++){
        ratingItems.push(
            <RatingItem isChecked={i < props.level}/>
        )
    }
    return (
        <>
                <View style={styles.ratingContainer}>
                    <View style={styles.rating}>
                        {ratingItems}
                    </View>

                    {
                        isRatingLevelNameVisible(props.level) && <View>
                        <Text style={styles.ratingText}>
                            {ratingLevelNames[props.level]}
                        </Text>
                    </View>}
                </View>

        </>
    )
}

