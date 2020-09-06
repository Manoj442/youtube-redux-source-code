import styled from 'styled-components';
import {Card} from '@material-ui/core';
export const StyledVideoPlayer=styled.div`
padding-bottom: 56.25%;
margin-left: 4%;
height:0;
position: relative;
@media (max-width:768px){
    padding-bottom: 56.25%;        
    height:0;
    margin-left: 0%;
    position: relative;
}
`;

export const StyledIframe=styled.iframe`
position: absolute;
top:0;
left:0;
width:68% !important;
height:65% !important;
@media (max-width:768px){
    position: absolute;
    top:0;
    left:0;
    width:100% !important;
    height:100% !important;
}
`;

export const VideoListContainer=styled.div`
display:flex;
padding-left:${props=>props.from === 'search' ? '0%' : '10%'};
flex-direction:${props=>props.from === 'search' ? 'column' : 'row'};
flex-wrap:wrap;
justify-content:space-around;
@media(max-width:768px){
    padding-left:0%
}
`;
export const VideoItemContainer=styled.div`
width:20%;
margin:1%;
@media(max-width:768px){
    width:100%;
    padding-left: 0%;
}
`;

export const VariableShadowCard=styled(Card)
`box-shadow:${props=>props.shadow === 'search' ? 'inset !important' : 'none !important'};
@media(max-width:768px){
    box-shadow:inset !important
}
`;