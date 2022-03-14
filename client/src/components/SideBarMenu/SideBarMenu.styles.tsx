import styled from "styled-components";

const Wrapper = styled.div`
    border-top:1px solid rgba(0, 0, 0, 0.1);  
    border-right:1px solid rgba(0, 0, 0, 0.1);
    text-align:center;

`;

const Search = styled.div`
   display:flex;
   align-item:center;
   margin-top:12px;
   padding:6px;
   background:#F0F0F0;
   border-radius:5px;
   cursor:pointer;
    // width:90%;
   margin-left:auto;
   margin-right:auto; 
   span{
       width:13px !important;
       height:13px;
       margin-right:7px;
       font-size:14px;
       cursor:pointer;
       
       p{
        background:white;
       }
   }
input{
    border:none;
    outline:none;
    color:#737373;
    font-size:14px;
    background:#F0F0F0;
    cursor:pointer;
}
`
const WorkSpaceType = styled.div`
    display:flex;
    justify-content:space-between;
    font-size:12px;
    align-item:center;
    margin-top:28px;
    // width:90%;
    margin-left:auto;
    margin-right:auto;
     span{
         display:flex;
         align-item:center; 
         align-self:center;
         span{
             padding-left:5px;
             padding-right:5px;
             align-self:center;
         }
        }
    button{
        height:32px;
        width:32px;
        border:none;
        border-radius:5px;
        margin-bottom:4px;
     }

`
const WorkSpace = styled.p`
    padding:14px;
    background:#F0F0F0;
    font-size:14px;
    cursor:pointer;
    color:#262627;

`

const Account = styled.div`
        border:1px solid rgba(0, 0, 0, 0.1);    
        padding:16px;
        z-index:999;
        width:100%;               
   h3{
       font-size:16px;
       margin-bottom:8px;
       text-align:left; 
   }
   p{
       font-size:14px;
       text-align:left; 

   }
`
const Help = styled.div`
  
   
   p{
    display:flex;
    align-item:center;
    font-size:14px;
    text-align:left;
    padding-top:16px;
    font-weight:600;
    cursor:pointer;
   span{
      
       margin-left:30px;
       margin-top:-5px;
       cursor:pointer;
       color:#737373; 
   }}
   ul{
       list-style:none;
       font-size:12px;
       text-align:left;
       color:#737373;        
       li{
           padding:8px;
       }
   }
`
const Container = styled.div`
width:100%;
position:absolute;
bottom:0px;
z-index:999;
`

export { Wrapper, Search, WorkSpaceType, WorkSpace, Account, Help, Container };
