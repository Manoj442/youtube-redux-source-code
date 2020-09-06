import React from 'react';
import {Card,CardActionArea,CardMedia,CardContent,Typography,Divider} from '@material-ui/core';
import {VideoListContainer,VideoItemContainer,VariableShadowCard} from './StyledVideoPlayer';
import {selectedVideo} from './../../store/actions/AllAction';
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const StyledVideoTitle=styled(Typography)`
line-height:2rem;
font-size:1rem !important;
font-weight:bold !important
`;

const VideoList=(props)=>{
    console.log(props.data);
    const data=props.data;
    const history=useHistory();
    function handleClick(video){      
      props.onSelectVideo(video);
      history.push('/YouTube-redux/select')
    }
    const videoList=data.length ? <VideoListContainer>
    {data.map((d,index)=>{
        return <VideoItemContainer>
          <VariableShadowCard key={index}>
        <CardActionArea onClick={()=>handleClick(d)}>
          <CardMedia           
            image={d.imageDetails.url}
            title={d.title}
            style={{height:'25vh'}}
          />
          <CardContent>
            <StyledVideoTitle variant="body1">
             {d.title}
            </StyledVideoTitle>
            <Typography variant="body2" color="textSecondary" component="p">
              {d.channel}
            </Typography>               
          </CardContent>
        </CardActionArea>
        </VariableShadowCard>          
        </VideoItemContainer>
    })}        
    </VideoListContainer>:null;    
    return(data.length && videoList )         
}
const mapStateToProps=(state)=>{
 return{
   data:state.videoListsData
 }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    onSelectVideo:video=>{dispatch(selectedVideo(video))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoList)
