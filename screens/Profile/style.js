import { StyleSheet } from 'react-native';
import {
    horizontalScale,
    scaleFontSize,
    verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../assets/fonts/helper';

const style = StyleSheet.create({
    profileImage: {
        width: horizontalScale(110),
        height: horizontalScale(110),
    },
    profileImageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(32),
    },
    profileImageContent: {
        borderWidth: 1,
        borderColor: '#F35BAC',
        padding: horizontalScale(4),
        borderRadius: horizontalScale(110),
    },
    userName: {
        marginTop: verticalScale(20),
        textAlign: 'center',
        fontFamily: getFontFamily('Inter_18pt', '600'),
        fontSize: scaleFontSize(20),
    },
    statAmount: {
        fontFamily: getFontFamily('Inter_18pt', '600'),
        fontSize: scaleFontSize(20),
        color: '#022150',
        textAlign: 'center',
    },
    statType: {
        fontFamily: getFontFamily('Inter_18pt', '400'),
        fontSize: scaleFontSize(16),
        color: '#79869F',
        textAlign: 'center',
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(40),
        paddingVertical: verticalScale(30),
        borderBottomWidth: 1,
        borderColor: '#E9EFF1',
    },
    statBorder: {
        borderRightWidth: 1,
        borderColor: '#E9EFF1',
    },

    tabsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopWidth: 1,
        borderTopColor: "#e0e0e0",
        paddingVertical: 20,
    },
    tab: {
        fontFamily: getFontFamily('Inter_18pt', '400'),
        fontSize: scaleFontSize(16),
        color: "#888",
    },
    tabActive: {
        fontFamily: getFontFamily('Inter_18pt', '400'),
        fontSize: scaleFontSize(16),
        fontWeight: "bold",
        color: "#000",
    },
    photosContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    photoPlaceholder: {
        width: "45%",
        height: 100,
        backgroundColor: "#e0e0e0",
        marginBottom: 10,
    },
});

export default style;