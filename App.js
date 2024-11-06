import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, FlatList } from "react-native";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import globalStyle from "./assets/styles/globalStyle";
import UserStory from "./components/UserStory/UserStory";
import UserPost from "./components/UserPost/UserPost";
import defaultProfileImage from "./assets/images/default_profile.png";

const App = () => {
  const userStories = [
    {
      firstName: "Joseph",
      id: 1,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Angel",
      id: 2,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "White",
      id: 3,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Olivier",
      id: 4,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Janka",
      id: 5,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nicolas",
      id: 6,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Adam",
      id: 7,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Noah",
      id: 8,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nathaniel",
      id: 9,
      profileImage: require("./assets/images/default_profile.png"),
    },
  ];

const userPosts = [
    {
        userName: "Joseph",
        location: "New York, USA",
        profileImage: defaultProfileImage,
        postImage: require("./assets/images/default_post.png"),
        likes: 120,
        comments: 45,
        saves: 10
    },
    {
        userName: "Angel",
        location: "Los Angeles, USA",
        profileImage: defaultProfileImage,
        postImage: require("./assets/images/default_post.png"),
        likes: 85,
        comments: 30,
        saves: 15
    },
    {
        userName: "White",
        location: "London, UK",
        profileImage: defaultProfileImage,
        postImage: require("./assets/images/default_post.png"),
        likes: 140,
        comments: 50,
        saves: 25
    }
];

  return (
    <SafeAreaView>
      <View
        style={globalStyle.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyle.envelopeIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={"#898DAE"} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>
              2
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({ item }) =>
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          }
        />
      </View>
      <View>
         {userPosts.map(post => (
        <UserPost
            key={post.userName}
            userName={post.userName}
            location={post.location}
            profileImage={post.profileImage}
            postImage={post.postImage}
            likes={post.likes}
            comments={post.comments}
            saves={post.saves}
        />
    ))}
       </View>
    </SafeAreaView>


  );
}

export default App;