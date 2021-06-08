import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import '../styles/MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'

const MessageSender = () => {

    const [input,setInput] = useState('')
    const [imageURL,setImageURL] = useState('')

    const handleSubmit= e =>{
        e.preventDefault()
        console.log("Someone said hi");
        setInput('')
        setImageURL('')
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input className="messageSender_input" value={input} type="text" onChange={(e)=>{
                        setInput(e.target.value)
                    }} placeholder="What's on your mind?"/>
                    <input type="text" value={imageURL} onChange={(e)=>{
                        setImageURL(e.target.value)
                    }} placeholder="Image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit"/>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticon style={{color:"orange"}}/>
                    <h4>Feeling an activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
