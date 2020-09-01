import React, { Component, Fragment } from 'react';
import { connect } from 'umi';
import {
    Upload,
    message,
    Input,
    Select,
    DatePicker,
    Avatar,
    Form,
    Button,
} from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import moment from 'moment';
import styles from './style.css';

const FriendInfo = props => {
    const { friendInfo } = props;
    // 格式化日期
    function formatDate(date) {
        let new_date = null;
        if (date) {
            new_date = new Date(date);
        } else {
            new_date = new Date();
        }
        let year = new_date.getFullYear();
        let month = new_date.getMonth() + 1;
        let day = new_date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        return year + '-' + month + '-' + day;
    }
    return (
        <div className={styles.friendInfo_panel}>
            <div className={styles.friendInfo_header}>
                <div className={styles.header_content}>
                    <Avatar
                        className={styles.header_avatar}
                        shape={'circle'}
                        src={friendInfo.cur_friendInfo.avatarUrl}
                    />
                    {/*<UserAddOutlined />*/}
                    <p>{friendInfo.cur_friendInfo.username}</p>
                </div>
            </div>
            <div className={styles.friendInfo_body}>
                <div className={styles.body_content}>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>用户名</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {friendInfo.cur_friendInfo.username}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>用户ID</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {friendInfo.cur_friendInfo.id}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>性别</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {friendInfo.cur_friendInfo.gender}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>生日</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {formatDate(friendInfo.cur_friendInfo.birthday)}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>电话</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {friendInfo.cur_friendInfo.phone}
                        </div>
                    </div>
                    <div className={styles.body_content_item}>
                        <div className={styles.body_content_item_title}>
                            <strong>邮箱</strong>
                        </div>
                        <div className={styles.body_content_item_content}>
                            {friendInfo.cur_friendInfo.email}
                        </div>
                    </div>
                    <div className={styles.body_content_item_last}>
                        <div className={styles.body_content_item_desc}>
                            <strong>简介</strong>
                        </div>
                        <div className={styles.body_content_item_desc_content}>
                            {friendInfo.cur_friendInfo.description}
                        </div>
                    </div>
                </div>
                <div className={styles.body_content_button}>
                    <Button
                        type="primary"
                        block
                        onClick={proposeCvs.bind(
                            this,
                            friendInfo.cur_friendInfo.id,
                        )}
                    >
                        发起会话
                    </Button>
                </div>
            </div>
        </div>
    );

    function proposeCvs(friendId) {
        props.dispatch({
            type: 'cvs/proposeCvs',
            payload: friendId,
        });
    }
};

const mapStateToProps = ({ friendInfo }) => {
    return {
        friendInfo,
    };
};

export default connect(mapStateToProps)(FriendInfo);