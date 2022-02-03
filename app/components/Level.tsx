import {StyleSheet, Text, TouchableHighlight, View} from "react-native";
import React, {useState} from "react";
import {Item, ItemType} from "./Item";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';




type PropsType = {
    label: string
    subtitle: string
    progress: number
    items: Array<ItemType>
}


const Level = (props: PropsType) => {
    const [value, setValue] = useState(false)
    return (
        <>

            <TouchableHighlight
                activeOpacity={0.5}
                underlayColor='#bce8e8'
                onPress={() => setValue(!value)}>
                <View style={styles.container}>

                    <View style={styles.title}>
                        <View style={{display: "flex", flexDirection: "row"}}>
                            <View>
                                <Icon name="checkmark-circle" size={30} color="#FFFFFF" />
                            </View>
                            <View style={{paddingLeft: 10}}>
                                <Text style={styles.label}>
                                    {props.label}
                                </Text>
                                <Text style={styles.subtitle}>
                                    {props.subtitle}
                                </Text>
                            </View>
                        </View>

                        <View>
                            {value
                                ? <Icon name="chevron-up" size={30} color="#2A6076" />
                                : <Icon name="chevron-down-sharp" size={30} color="#2A6076" />}

                        </View>
                    </View>


                    <View style={[{marginTop: 15, backgroundColor: '#E5E5E5', width: "90%", borderRadius: 5,}]}>
                        <LinearGradient
                            colors={['#80DBDB', '#00A7A9', '#005C5D']}
                            style={[styles.linearGradient, {width: `${props.progress}%`}]}
                            start={{x: 0.5, y: 0}}
                        >
                        </LinearGradient>
                    </View>


                </View>
            </TouchableHighlight>

            <View style={{display: "flex", alignItems: "center"}}>
                {value
                    ? <Item item={props.items}/>
                    : <></>
                }
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 110,
        backgroundColor: '#ECECEC',
        padding: 10,

    },
    title: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
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
    linearGradient: {
        height: 10,
        borderRadius: 5,
    },
    item: {
        fontSize: 14,
        color: "#2A6076"
    }

});

export default Level;