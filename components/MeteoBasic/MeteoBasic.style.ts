import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    clock:{
        alignItems:"flex-end"
    },
    weatherLabel:{
        alignSelf:"flex-end",
        transform:[{rotate:"-90deg"}]
    },
    img:{
        width:90,
        height:90,
        backgroundColor:"white"
    },
    temperatureBox:{
        flexDirection:"row",
        alignItems:"baseline",
        justifyContent:"space-between"
    },
    temperature:{
        fontSize:100
    }
})