import React, {Component,Fragment} from 'react';
import SelectedVideo from './Components/SelectedVideo/selectedVideo';
import VideoList from './Components/SelectedVideo/videoList';
import StyledVideoList from './Components/SelectedVideo/StyledVideoList';
import SearchComponent from './Components/Search/search';
import {getTrendingVideos} from './store/actions/AllAction';
import alanBtn from '@alan-ai/alan-sdk-web';
import {connect} from 'react-redux';
import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import {withRouter,Route,Switch} from 'react-router-dom';
import youTubeImage from './images/youtubeLogo.png';
const HeaderContainer=styled.div`
padding:2% 2% 0% 8%
`;
const StyledHeader=styled.h1`
padding:0% 16% 0% 4% !important;
`;
const StyledImage = styled.img`
width: 36%;
height: auto;
:hover{
  cursor: pointer;
}
@media (max-width:768px){
  width:96%
}
`;
const ImageContainer = styled.div`
width:30%;
@media (max-width:768px){
  width:auto
}
`;
class App extends Component{  
  history  = this.props.history;
  alanKey = '54502fa422581375f367f69d4ac9fbb42e956eca572e1d8b807a3e2338fdd0dc/stage';
  constructor(props) {
    super(props)     
  } 
  async componentDidMount(){
    alanBtn({
      key:this.alanKey,
      onCommand:({command,searchVideos})=>{
          switch(command){
              case 'searchResults':
              console.log(searchVideos);              
              break; 
          }               
      }
  });
    this.props.getTrendingVideos();
  }
handleGoBack=()=>{ 
  this.props.getTrendingVideos();
  this.history.push('/YouTube-redux/'); 
}
  render(){
    return <div>  
  <div style={{display:'flex',flexDirection:'row',padding:'2%'}}>
  <ImageContainer>
  <StyledImage src={youTubeImage} alt="Youtube logo" onClick={this.handleGoBack}/>
  </ImageContainer>
  <SearchComponent/>  
    </div>     
  <Switch>
  <Route exact path="/YouTube-redux/" render={props=><VideoList/>}/>
  <Route exact path="/YouTube-redux/select" render={props=><Fragment><SelectedVideo/><StyledVideoList/></Fragment>}/>
  </Switch>       
    </div>
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getTrendingVideos:()=>dispatch(getTrendingVideos())
  }
}
export default withRouter(connect(null,mapDispatchToProps)(App));
