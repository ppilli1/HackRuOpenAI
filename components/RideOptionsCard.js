import React from "react"
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from "react-native"
import tw from "tailwind-react-native-classnames"
import {Icon} from "react-native-elements"
import {useNavigation} from "@react-navigation/native"
import {useSelector} from "react-redux"
import { selectTravelTimeInformation } from "../slices/navSlice"
import { latitude,longitude } from "./NavigateCard"

//This refers to Uber's surge pricing, which increases during times of high user demand in an area

data = [
    
]

const RideOptionsCard = () => {
    const navigation = useNavigation()
    const travelTimeInformation = useSelector(selectTravelTimeInformation)

    return(
        <SafeAreaView style = {tw`bg-white flex-grow`}>
            <View>    
                <TouchableOpacity 
                    onPress = {() => navigation.navigate("NavigateCard")}
                    style = {tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
                >
                    <Icon name = "chevron-left" type = "fontawesome"/>
                </TouchableOpacity>
                <Text></Text>
            </View>               
        </SafeAreaView>
    )
}

export default RideOptionsCard
const styles = StyleSheet.create({})