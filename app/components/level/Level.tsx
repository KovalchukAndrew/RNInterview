import {Text, TouchableHighlight, View} from "react-native";
import React, {useState} from "react";
import {Item, ItemType} from "../item/Item";
import LinearGradient from "react-native-linear-gradient";
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles'

type PropsType = {
    label: string
    subtitle: string
    progress: number
    items: Array<ItemType>
}

const Level = (props: PropsType) => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)
    return (
        <>
            <TouchableHighlight
                activeOpacity={0.5}
                underlayColor='#bce8e8'
                onPress={() => setIsCollapsed(!isCollapsed)}>
                <View style={styles.container}>

                    <View style={styles.titleContainer}>
                        <View style={styles.title}>
                            <View>
                                <Icon name="checkmark-circle" size={30} color="#FFFFFF"/>
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
                            {isCollapsed
                                ? <Icon name="chevron-up" size={30} color="#2A6076" />
                                : <Icon name="chevron-down-sharp" size={30} color="#2A6076" />}

                        </View>
                    </View>

                    <View style={{alignItems: "center"}}>
                        <View style={styles.progress}>
                            <LinearGradient
                                colors={['#80DBDB', '#00A7A9', '#005C5D']}
                                style={[styles.linearGradient, {width: `${props.progress}%`}]}
                                start={{x: 0.5, y: 0}}>
                            </LinearGradient>
                        </View>
                    </View>

                </View>
            </TouchableHighlight>

            <View style={styles.itemsContainer}>
                {isCollapsed
                    ? props.items.map(item => {
                        return <Item
                            key={item.id}
                            id={item.id}
                            level={item.level}
                            label={item.label}/> })
                    : <></>
                }
            </View>

        </>
    )
}

export default Level;