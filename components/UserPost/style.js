import { StyleSheet } from "react-native";
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    postContainer: {
        justifyContent: 'center',
        marginLeft: 30,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EFF2F6',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    userInfo: {
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    userName: {
        fontWeight: 'bold',
        color: 'black',
        fontFamily: getFontFamily('Inter_18pt', '600'),
    },
    location: {
        color: 'grey',
        fontFamily: getFontFamily('Inter_18pt', '400'),
    },
    info: {
        flexDirection: 'row',
        paddingLeft: '30%',
    },
    postImage: {
        alignItems: 'center',
        marginVertical: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'start',
        padding: 10,
    },
    interaction: {
        fontSize: 16,
        marginLeft: 10,
        marginRight: 35,

    }
});

export default style;
