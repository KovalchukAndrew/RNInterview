import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: '#ECECEC',
        padding: 10,

    },
    titleContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    title: {
        display: "flex",
        flexDirection: "row"
    },
    label: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 25,

        color: "#2A6076"
    },
    subtitle: {
        fontSize: 12,
        color: "#A4A4A4"

    },
    progress: {
        marginTop: 15,
        backgroundColor: '#E5E5E5',
        width: "90%",
        borderRadius: 5,
    },
    linearGradient: {
        height: 10,
        borderRadius: 5,
    },
    itemsContainer: {
        display: "flex",
        alignItems: "center"
    }
});
