import styled from 'styled-components';
import { Input } from 'semantic-ui-react';
export const StyledSearch=styled(Input)`
margin-top: 2%;
padding: 0% 0% 2% 0%;
width:200%;
@media (max-width:768px){
    margin-top: 2%;  
    padding-left: 5%;      
    width:90%
}
`;