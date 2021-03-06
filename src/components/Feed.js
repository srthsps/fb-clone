import React from 'react'
import '../styles/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post />
        </div>
    )
}

export default Feed
