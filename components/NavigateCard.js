import React, {useState} from "react"
import {StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, ScrollView, TouchableOpacity} from "react-native"
import tw from "tailwind-react-native-classnames"
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete"
import {GOOGLE_MAPS_APIKEY} from "@env"
import {useDispatch} from "react-redux"
import {setDestination} from "../slices/navSlice.js"
import {useNavigation} from "@react-navigation/native"
import NavFavorites from "../components/NavFavorites.js"
import {Icon} from "react-native-elements"
import axios from "axios"
export const latitude = latitude;
export const longitude = longitude;


// globals.js
global.myDestination = "New York"; //default is New York

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    
    return(
        <SafeAreaView style = {tw`bg-white flex-1`}>
            <Text style = {tw`text-center py-5 text-xl`}>Good Morning, Pratham</Text>
            <View style = {tw`border-t border-gray-200 flex-shrink`}>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder = "Where to?"
                        styles = {toInputBoxStyles}
                        fetchDetails = {true}
                        returnKeyType = {"search"}
                        minLength = {2}
                        onPress = {(data,details = null) => {
                            console.log("HI");
                            
                            // global.myDestination = details.geometry.location; //setting global var to the destination
                            

                            // // Get the destination address
                            // const destinationAddress = global.myDestination.destination_addresses[0];

                            // console.log("Destination Address:", destinationAddress);

                            // fetch("https://api.openai.com/v1/chat/completions", {
                            //     method: "POST",
                            //     headers: {
                            //         'Accept': 'application/json',
                            //         'Content-Type': 'application/json',
                            //         'Authorization': `Bearer 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`
                            //     },
                            //     body: JSON.stringify({
                            //         "model": "gpt-3.5-turbo",
                            //         "messages": [{"role": "user", "content": "Say this is a test!"}],
                            //         "temperature": 0.7,
                            //         "stop": ["\n"]
                            //     })
                            // }).then(r => console.log(r));
                            
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            // console.log("WHAT IS THE OUTPUT?" + details.geometry.location);
                            
                            setLatitude(details.geometry.location.lat);
                            setLongitude(details.geometry.location.lng);
                            navigation.navigate("RideOptionsCard")
                            console.log(latitude);
                            console.log(longitude);

                        }}
                        enablePoweredByContainer = {false}
                        query = {{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                        nearbyPlacesAPI = "GooglePlacesSearch"
                        debounce = {400}
                    />
                </View>
                <NavFavorites/>
            </View>
            <View style = {tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity 
                    onPress = {() => navigation.navigate("RideOptionsCard")}
                    style = {tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                >
                    <Icon name = "car" type = "font-awesome" color = "white" size = {16}/>
                    <Text style = {tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard
const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})