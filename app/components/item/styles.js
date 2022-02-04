import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
    itemLabel: {
        fontSize: 14,
        color: "#2A6076",

    },
    ratingContainer: {
        display: "flex",
        flexDirection: "column"
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
    },
    ratingText: {
        marginTop: 12,
        color: "#CECECE"
    }


});