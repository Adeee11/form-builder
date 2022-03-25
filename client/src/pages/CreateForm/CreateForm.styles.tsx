import styled, { css } from "styled-components";


const Wrapper = styled.div`
background: #FAFAFA;

.chooseInput{
    background: #E3E3E3;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;
}

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;  
    background: white;
    @media(max-width:768px){
        flex-direction: column;
        overflow: hidden;
        ul, p{
            justify-content: space-evenly;
        }


    
    }
    .first{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
        span{
            min-width: 104px;
        }
        input{
        outline: none;
        border: none;
        font-size: 14px;
        margin-left: 4px;
        font-weight: 600;
    }
    }
    

    ul{

        display: flex;
        list-style: none;
        flex-wrap: nowrap;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;

        li{
           margin-right   :10px ;
           cursor: pointer;
        }
    }
    p{
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 10px;
        .publish{
            background: black;
            color:white;
            padding: 6px 12px;
            border-radius: 5px;
            font-size: 14px;
            margin-left: 16px;
            border: none;
            cursor: pointer;
            height: 32px;
        }
        
        .avatar{
            margin-left: 10px;
            border-radius: 50%;
            background: blue;
            color:white;
            width:32px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .preview{
            
            background: #E3E3E3;
            width: 32px;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            
        }
    }
   
`
const Form = styled.form`
   background: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   min-height: 80vh;
   max-width: 900px;
   margin: 0 auto;
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
   position: relative;
   border-radius: 10px;
   margin-top: 20px;
   overflow-x: hidden;
   .form-header{
    border-radius: 10px;
       font-size: 25px;
       font-weight: 700;
       text-align: left;
       width: 100%;
       padding: 10px;
       border-top: 10px solid blue;
       
   }
   .que{
       
       width  :100% ;
       display: flex;
       align-items: center;
       padding: 7px;
       margin-top :20px ;
       span{
           margin-right: 4px;
       }
       .input{
       width :100% ;
       border:none;
       outline: none;
       flex:1;   
      
   }
   
   }
   
   .ans{
       min-width: 600px;
       color:lightblue;
       border-bottom: 2px solid lightblue;
       padding: 10px;
       margin-left: 10px;
       @media (max-width:768px) {
        min-width   : 0;
        width:80vw;
       }
   }
  

.sub{
    
    z-index: 1;
    border:none;
    padding: 6px 12px;
    font-size :14px ;
    border-radius: 5px;
    margin-top: 30px;
    border:none;
    color:white;
    background: blue;
    margin-bottom: 20px;
}
.opt{
    min-width: 600px;
    padding:10px;
    @media (max-width:768px) {
        min-width   : 0;
        width:80vw;
       }
    span{
        width: 100%;
        display: flex;
    }
    input{

        border: none;
        padding:6px;
        outline: none;
        border-radius: 4px;
        width: 100%;
    }
    button{
        border: none;
        padding: 6px 10px;
        border-radius: 4px;
    }
}
.optlist{
    min-width: 600px;
      display:flex; 
      width: 100%;
      align-items: center;
      background:lightblue ;
      margin-top: 10px;
      border-radius: 4px;
      @media (max-width:768px) {
        min-width   : 0;
        width:80vw;
       }
    p{
      border:1px solid lightblue;
      font-size: 16px;
      padding: 6px;
      border-radius:6px ;
      width: 100%;
    }
    button{
      color:blue;
      background: lightblue;
      width: 32px;
      height: 32px;
      cursor: pointer;
      border: none;
    }
}
.delque{
    border:none;
    width: 32px;
    height: 32px;
    border-radius: 4px;
    margin-left: 7px;
}

`




export { Wrapper, Header, Form };