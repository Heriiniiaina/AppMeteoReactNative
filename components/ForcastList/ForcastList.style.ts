import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginHorizontal:20
    },
    image:{
        height:50,
        width:50
    },
    day:{
        fontSize:20
    },
    date:{
        fontSize:20
    },
    temperature:{
        fontSize:20,
        textAlign:"right"
    }
})