import {fetchMostPopularVideos,getSimilarVideos,getYoutubeData} from './../../API/youtube';
export const getTrendingVideos=()=>{
    return(dispatch)=>{
        fetchMostPopularVideos().then((data)=>{
            const results= formattedTrendingVideoData(data);
            dispatch({
                type:'RETRIEVE_POPULAR_VIDEOS',
                data:results
            })
        })           
    }
}
export const selectedVideo=(video)=>{
    return(dispatch)=>{
        getSimilarVideos(video.videoId).then((data)=>{
            const simiarVideos=formattedVideoData(data);
            dispatch({
                type:'GET_SIMILARVIDEOS',
                data:simiarVideos
            })
        })
        dispatch({
            type:'SELECT_VIDEO',
            data:video
        })
        
    }
}
const formattedVideoData=(data)=>{
var similarVideos=[];
similarVideos=data.items.map((item)=>{
    return{
      videoId:item.id.videoId,
      channel:item.snippet.channelTitle,
      description:item.snippet.description,
      title:item.snippet.title,
      imageDetails:item.snippet.thumbnails.high
    }
  });
  return similarVideos
  }
  
  const formattedTrendingVideoData=(data)=>{
    console.log(data);
    var similarVideos=[];
    similarVideos=data.items.map((item)=>{
        return{
          videoId:item.id,
          channel:item.snippet.channelTitle,
          description:item.snippet.description,
          title:item.snippet.title,
          imageDetails:item.snippet.thumbnails.high
        }
      });
      return similarVideos 
  }
  export const searchVideo=(searchText)=>{
      return(dispatch)=>{
        getYoutubeData(searchText).then((data)=>{
           const results= formattedVideoData(data);
           dispatch({
            type:'SEARCH_VIDEO',
            data:results
        })
        });        
      }
  }

  