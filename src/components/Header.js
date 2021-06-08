import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlined from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlined from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleOutlined from '@material-ui/icons/SupervisedUserCircleOutlined'
import {Avatar,IconButton} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActive from '@material-ui/icons/NotificationsActive'
import ExpandMore from '@material-ui/icons/ExpandMore'



const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="Blaaaaaaaaaah"/>
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" placeholder="Search facebook" />
                </div>
            </div>
            
            <div className="header_middle"></div>
            <div className="header_option header_option--active">
                <HomeIcon />
            </div>
            <div className="header_option">
                <FlagIcon />
            </div>
            <div className="header_option">
                <SubscriptionsOutlined />
            </div>
            <div className="header_option">
                <StorefrontOutlined />
            </div>
            <div className="header_option">
                <SupervisedUserCircleOutlined />
            </div>

            <div className="header_right"></div>
            <div className="header_info">
                <Avatar src='https://i.pinimg.com/280x280_RS/79/33/0e/79330ecae85b936ef4285fe87d66f515.jpg'/>
                <h4>Sarath Sps</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsActive/>
            </IconButton>
            <IconButton>
                <ExpandMore/>
            </IconButton>
        </div>
    )
}
export default Header
