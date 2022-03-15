import styled, { css } from "styled-components";


const Wrapper = styled.div`

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-right: 10px;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    ul{
        display: flex;
        list-style: none;
        flex-wrap: nowrap;
        align-items: center;
        li{
           margin-right   :10px ;
        }
    }
    p{
        display: flex;
        align-items: center;
        .publish, .plans{
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
        .plans{
            background: forestgreen;
        }
        .avatar{
            margin-left: 10px;
            border-radius: 50%;
            background: red;
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
   display: flex;
   flex-direction: column;
   align-items: center;
   min-height: 80vh;
   max-width: 900px;
   margin: 0 auto;
   box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
   position: relative;
   .que{
       min-width: 300px;
       input{
       /* max-width: 300px; */
       border:none;
       outline: none;
      margin-top :20px ;
      padding: 7px;
   }
   }
   
   .ans{
       min-width: 300px;
       color:lightblue;
       border-bottom: 2px solid lightblue;
       padding: 10px;
   }

.sub{
    /* border:1px solid black;  */
    z-index: 1;
    border:none;
    padding: 6px 12px;
    font-size :14px ;
    border-radius: 5px;
    position:absolute;
    bottom:20px;
    border:0.5px solid black;
    color:rgb(38, 38, 39);
}
.opt{
    input{
        border:1px solid lightblue;
        padding:6px;
        background: lightblue;
        outline: none;
        border-radius: 4px;
    }
    button{
        background: black;
        color:white;
        padding: 6px 10px;
        border-radius: 4px;
    }
}

`
const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
font-size: 14px;
z-index: 999;
.popup{
    width: 400px;
    height: 360px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-200px, -130px);
    margin-left: auto;
    margin-right: auto;
    background: white;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 5;
      h3{
          margin-left: 10px;
          color: rgb(38, 38, 39);
          padding: 10px;

      }
    ul{
        list-style: none;
       li{
           cursor: pointer;
           padding: 12px;
           color: rgb(38, 38, 39);
           span{
                border-radius:4px ;
                /* padding: 5px; */
                font-size: 17px;
                padding:4px ;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                margin-left: 10px;
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
    }

}

`

export { Wrapper, Header, Form, Modal };