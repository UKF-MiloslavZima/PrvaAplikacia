import { StyleSheet } from "react-native";
import { getFontFamily } from "../fonts/helper";

const globalStyle = StyleSheet.create({
    header: {
        marginRight: 17, 
        marginLeft: 27, 
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    envelopeIcon:{
        padding:14, 
        borderRadius: 100, 
        backgroundColor:"#F9FAFB",
    },
    messageNumberContainer:{
        backgroundColor: "#F35BAC",
        justifyContent: "center",
        flexDirection: "row",
        width: 10,
        height: 10,
        borderRadius: 10,
        position: "absolute",
        right: 10,
        marginTop: 12,
    },
    messageNumber: {
        color: "#FFF",
        fontFamily: getFontFamily("Inter_18pt", "600"),
        fontSize: 6,
    },
    userStoryContainer: {
        marginTop: 20,
        marginHorizontal: 28,
    },
});

export default globalStyle;