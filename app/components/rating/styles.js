import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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
        borderRadius: 7
    },
    ratingText: {
        marginTop: 12,
        color: "#CECECE"
    }
});