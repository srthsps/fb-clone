import React from 'react'
import SidebarRow from '../components/SidebarRow'
import '../styles/Sidebar.css'
import LocalHospital from '@material-ui/icons/LocalHospital'
import EmojiFlags from '@material-ui/icons/EmojiFlags'
import PeopleIcons from '@material-ui/icons/People'
import Storefront from '@material-ui/icons/Storefront'
import VideoLibrary from '@material-ui/icons/VideoLibrary'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src='https://i.pinimg.com/280x280_RS/79/33/0e/79330ecae85b936ef4285fe87d66f515.jpg' title='Sarath Sps' />
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlags} title='Pages'/>
            <SidebarRow Icon={PeopleIcons} title='Friends'/>
            <SidebarRow Icon={Storefront} title='Marketplace'/>
            <SidebarRow Icon={VideoLibrary} title='Videos'/>
        </div>
    )}

export default Sidebar
