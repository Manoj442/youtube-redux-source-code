const initialState={
    videoListsData:[],
    selectedVideo:{}
};
export const VideosReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'RETRIEVE_POPULAR_VIDEOS':                 
         return {...state,
        videoListsData:action.data};                
        case 'SELECT_VIDEO':
         return {...state,
        selectedVideo:action.data};
        case 'GET_SIMILARVIDEOS':
         return {...state,
        videoListsData:action.data
        }   
        case 'SEARCH_VIDEO':
            return{
                ...state,
            videoListsData:action.data,
            selectedVideo:{}
            }   
    }
    return state;
}