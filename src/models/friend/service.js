import request from '../../../util/request';
import api from '../../../util/api';

const fetchFriendList = async token => {
    return request
        .post(api.user_api.friend, token)
        .then(res => {
            return res;
        })
        .catch(error => {
            throw error;
        });
};
export default { fetchFriendList };
