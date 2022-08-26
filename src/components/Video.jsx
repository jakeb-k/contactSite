import YouTubePlayer from "react-player"; 

const Video = (props) => {
    const url = props.url
    return(
        <div className='vidContainer'>
            <YouTubePlayer
            url={url}
            width='580px'
            height='400px'
            
            />
        </div>
    )
}
export default Video; 