import axios from 'axios';
const url="https://www.googleapis.com/youtube/v3/search";
const apiKey=process.env.REACT_APP_YOUTUBE_API_KEY;
 
// https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?
//         part=snippet
//         &chart=mostPopular
//         &regionCode=es
//         &videoCategoryId=17
 export const getYoutubeData=async(searchText)=>{
     try
     {        
        const data= await axios.get(url,{
            params:{
                part:'snippet',
                maxResults:12,
                key:apiKey,
                q:searchText
            }
         });
         return data.data;
     } 
     catch(error){
         console.log(error);
     }    
 }
 export const fetchMostPopularVideos=async()=>{
     try{
        console.log(apiKey);
        const popularVideoData=await axios.get('https://www.googleapis.com/youtube/v3/videos',{
            params:{
                part:'snippet',
                chart:'mostPopular',
                regionCode:'IN',
                videoCategoryId:17,
                maxResults:12,
                key:apiKey
            }            
        });
        console.log(popularVideoData.data);
        return popularVideoData.data;
     }
     catch(error){

     }
 }
//  https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?
//         part=snippet
//         &type=video
//         &relatedToVideoId=wtLJPvx7-ys
 export const getSimilarVideos=async(videoId)=>{
     try{
        const similarVideos=await axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
            part:'snippet',
            maxResults:12,
            type:'video',
            regionCode:'IN',
            relatedToVideoId:videoId,
            key:apiKey
        }
    });
    console.log(similarVideos.data);
    return similarVideos.data
     }  
     catch(error)
     {
         console.log(error)
     }  
 }