import React from "react";
import {StyleSheet, Text, View} from "react-native";

export type ItemsType = {
    item: Array<ItemType>
}
export type ItemType = {
    id: string,
    level: number,
    label: string
}

export const Item = (props: ItemsType) => {
    const ratingValues = [null, "explained", "understood", "implemented"]
    return (
        <>
            {
                props.item.map(el => {
                    return <View key={el.id} style={styles.container}>
                        <Text>
                            {el.label}
                        </Text>
                        <View style={{display: "flex", flexDirection: "column", }}>
                            <View style={styles.rating}>
                                <View style={[styles.ratingItem, el.level > 0 ? {backgroundColor: "#00A7A9", borderRadius: 7}: {backgroundColor: "#E5E5E5",borderRadius: 7}]}></View>
                                <View style={[styles.ratingItem, el.level > 1 ? {backgroundColor: "#00A7A9", borderRadius: 7}: {backgroundColor: "#E5E5E5", borderRadius: 7}]}></View>
                                <View style={[styles.ratingItem, el.level > 2 ? {backgroundColor: "#00A7A9", borderRadius: 7}: {backgroundColor: "#E5E5E5", borderRadius: 7}]}></View>
                            </View>
                            <View>
                                <Text style={{marginTop: 12}}>
                                    {ratingValues[el.level]}
                                </Text>
                            </View>
                        </View>

                    </View>
                })
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: '#E5E5E5',
    },
    rating: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    ratingItem: {
        marginLeft: 3,
        width: 13,
        height: 13,
    }


});