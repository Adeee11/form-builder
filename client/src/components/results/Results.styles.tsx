import styled from 'styled-components';


const Wrapper = styled.div`
background:rgb(250, 250, 250);
`


const Menu = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
background: white;



 ul{
     list-style: none;
     display: flex;
     max-width: 900px;
     margin: 0 auto;
     @media(max-width:768px){
         /* justify-content:space-between */
         width:100%;
     }
     

     li{
         color:#898989;
         font-size: 12px;
         margin-right: 10px;
         text-transform: uppercase;
         cursor: pointer;
         padding:10px;
         display:flex;
         align-items:center;
         justify-content:center;
         @media(max-width:768px){
         flex:1;
         background:#F4F4F4;
         margin-right:0px;
         border-right:0.5px solid black;
         text-align:center;
        
     }
     }
     li:hover{
         color:black;
         @media(max-width:768px){
            border-bottom:none;
            color:#898989;
         
     }    
     }
     .active{
         color: black;
         border-bottom:2px solid black;
         
         @media(max-width:768px){
            border-bottom:none;
         background:#737373;
         color:white;
         
     }
     }
 }

`
const Insights = styled.div`
max-width: 900px;
margin: 0 auto;
@media(max-width:768px){
       width:100%;
         
     }
p{
    padding: 40px 0;
    color:#272727;
    font-size: 24px;
    @media(max-width:768px){
         width:90%;
         margin:0 auto;
     }
}
ul{
    list-style: none;
    display: flex;
        @media(max-width:768px){
         flex-wrap:wrap;
         width:90%;
         margin:0 auto;
     }
    li{
        margin-right: 48px;
        span{
            display: block;
        }
        .first{
            font-size: 14px;
            color:#737373
        }
        .second{
            font-size: 36px;
            color:#262627;
            font-weight: 100;
        }
    }
}
`

const Summary = styled.div`
max-width: 900px;
margin: 0 auto;
display: flex;
justify-content: space-between;
@media(max-width:768px){
       flex-direction:column-reverse;
       width:90%;
     }
.first{
    flex-basis: 70%;
.heading{
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 24px;
    color:#262627;
    font-weight: 100;
    display: block;
}
.block{

    background: white;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
   border-radius: 10px;
   padding-top: 24px;
   padding-left: 32px;
   padding-right: 32px;
   margin-bottom: 20px;
   .question{
       font-size: 16px;
       color: #262627;
       .span{
           padding: 0 6px;
           border-radius: 4px;
           width: 52px;
           height: 24px;
           display: inline-flex;
           align-items: center;
           justify-content: space-between;
           margin-right: 10px;
       }
       .short, .long{
               background: #379CFB;
           }
           .choice{
               background: pink;
           }
           .email{
               background: skyblue;
           }
           .number{
               background: lightblue;
           }
           .url{
               background: blue;
           }
   }
   .ans{
       margin-left: 54px;
       padding: 12px 20px;
       font-size: 14px;
       
   }
   
}
}
.second{
flex-basis: 25%;
margin-top: 100px;
button{
    background: black;
    color: #FFFFFF;
    font-size: 14px;
    padding: 2px 12px;
    border-radius: 4px;
    width: 100%;
    
}
.text{
    background: rgb(250, 250, 250);
    padding: 16px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 100;
    text-align: justify;
        
}
}
`

const Responses = styled.div`
max-width: 900px;
margin: 0 auto;
overflow-x: scroll;
.block{
    min-width: 300px;
    border: 1px solid gray;
    font-size: 14px;
    padding:10px;
}

.flex{
    display: flex;
    
    
}
.border{
    border:1px solid black;
}
.padding{
    padding: 10px;
}
.block{
    display: flex;
}
`

export { Wrapper, Menu, Insights, Summary, Responses }