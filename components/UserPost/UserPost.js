import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const UserPost = props => {
    return (
        <View style={style.postContainer}>
            <View style={style.header}>
                <UserProfileImage
                    profileImage={props.profileImage}
                    imageDimensions={48}
                />
                <View style={style.userInfo}>
                    <Text style={style.userName}>{props.userName}</Text>
                    <Text style={style.location}>{props.location}</Text>
                </View>
                <View style={style.info}>
               <FontAwesomeIcon icon={faEllipsisH} size={24} color={'#79869F'} />
            </View>
            </View>
            <Image source={props.postImage} style={style.postImage} />
            <View style={style.footer}>
                <FontAwesomeIcon icon={faHeart}/>
                <Text style={style.interaction}>{props.likes}</Text>
                <FontAwesomeIcon icon={faComment}/>
                <Text style={style.interaction}>{props.comments}</Text>
                <FontAwesomeIcon icon={faBookmark}/>
                <Text style={style.interaction}>{props.saves}
                </Text>
            </View>
        </View>
    );
};

UserPost.propTypes = {
    userName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    profileImage: PropTypes.any.isRequired,
    postImage: PropTypes.any.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    saves: PropTypes.number.isRequired,
};

export default UserPost;