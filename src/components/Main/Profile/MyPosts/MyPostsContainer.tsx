import {MyPosts} from './MyPosts';
import {addNewPost, ProfileDataType} from '../../../../redux/profile-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    profileData: ProfileDataType
}
type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return { profileData: state.profileData }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch( addNewPost(newPost) )
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)