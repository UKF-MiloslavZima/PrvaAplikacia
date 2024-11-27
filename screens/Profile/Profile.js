import React from "react";
import { SafeAreaView, Text, Image, ScrollView, View, TouchableOpacity } from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import { ProfileTabsNavigation } from "../../navigation/MainNavigation";
import style from "./style";

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView contentContainerStyle={globalStyle.flexGrow}>
                <View style={style.profileImageContainer}>
                    <View style={style.profileImageContent}>
                        <Image
                            style={style.profileImage}
                            source={require('../../assets/images/default_profile.png')}
                        />
                    </View>
                </View>
                <Text style={style.userName}>Emmanuel Robertsen</Text>
                <View style={style.statContainer}>
                    <View>
                        <Text style={style.statAmount}>45</Text>
                        <Text style={style.statType}>Following</Text>
                    </View>
                    <View style={style.statBorder} />
                    <View>
                        <Text style={style.statAmount}>30M</Text>
                        <Text style={style.statType}>Followers</Text>
                    </View>
                    <View style={style.statBorder} />
                    <View>
                        <Text style={style.statAmount}>100</Text>
                        <Text style={style.statType}>Posts</Text>
                    </View>
                </View>
                {/* <View style={globalStyle.flex}>
                    <ProfileTabsNavigation />
                </View> */}

<View style={style.tabsContainer}>
                <Text style={style.tabActive}>Photos</Text>
                <Text style={style.tab}>Videos</Text>
                <Text style={style.tab}>Saved</Text>
            </View>
            <View style={style.photosContainer}>
                <View style={style.photoPlaceholder} />
                <View style={style.photoPlaceholder} />
                <View style={style.photoPlaceholder} />
                <View style={style.photoPlaceholder} />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;