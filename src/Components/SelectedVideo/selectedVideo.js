import React ,{useRef,useEffect} from 'react';
//import styles from './youtube.module.css';
import {StyledVideoPlayer,StyledIframe} from './StyledVideoPlayer';
import SimilarVideoList from './StyledVideoList';
import {connect} from 'react-redux';
import { useLocation } from "react-router-dom";
const scrollToRef=(ref)=>window.scrollTo(0,0)
const SelectedVideo=(props)=>{
    // const location = useLocation();
    // console.log(location.state.video);
    //console.log(props);
    const videoData = props.data;
    const video=useRef(null);
    useEffect(() => {        
        scrollToRef(video);
    });
    //console.log(props.data);
    const url=videoData ? 
    `https://www.youtube.com/embed/${videoData.videoId}?rel=0&hd=1&autoplay=1`: "";
    const selectedVideo=Object.keys(videoData).length ?  <div>
            <StyledVideoPlayer ref={video}>         
        <StyledIframe src={url} title={videoData.title} 
        frameBorder="0" allowFullScreen></StyledIframe>                  
        </StyledVideoPlayer>      
        </div> : null;
    return (selectedVideo)
}
const mapStateToProps=(state)=>{
    return{
        data:state.selectedVideo,
    }
}
export default connect(mapStateToProps,null)(SelectedVideo);
