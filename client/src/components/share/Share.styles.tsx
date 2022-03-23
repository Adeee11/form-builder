import styled from "styled-components";

const Container = styled.div`
    background: rgb(250, 250, 250);
    min-height: 80vh;
   
.heading{
    max-width: 900px;
    margin: 0 auto;
    font-size: 24px;
    font-weight: 200;
    color:#262627;
    margin-top: 22px;
    display: block;
    @media (max-width:900px){
      width:90%;    
    }
}
    .section1{

    display:flex;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto;
    margin-top:22px;
    @media (max-width:900px){
      flex-direction    :column ;
    }
    .box1{
        box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2); 
       border-radius :4px ;
       padding: 22px;
       background: white;
       width:50%;
       @media (max-width:900px){
      width:90%;
      margin:0 auto;    
    }  
       .ico{
           
           font-size :32px ;
       }
       .text{
        margin-top: 11px;
           font-size: 11px;
           color:#262627;
       }
       .inputandbtn{
           width:100%;
           display: flex;
           align-items: center;
           border:1px solid gray;
           border-radius: 4px;
           overflow: hidden;
           input{
               border:none;
               outline: none;
               flex: 1;
               font-size: 12px;
           }

        button{
            background: black;
            color:white;
            font-size: 12px;
            padding: 6px 12px;
            border: none;
            /* flex: 0; */
        }
       }
       .socialmedia{
           margin-top: 10px;
           span{
               border-radius: 100%;
               overflow: hidden;
               width:32px;
               height: 32px;
               margin-right: 8px;
               display: inline-flex;
               align-items: center;
               justify-content: center;
               background: rgba(0,0,0,0.2);
               color:#262627;
           }
       }
    }
    .box2, .box3{
        box-shadow: 0 8px 8px 0 rgba(0,0,0,0.2);
        border-radius :4px ;
       padding: 22px;
       background: white;
        width:23%;
        @media (max-width:900px){
      width:90%;
      margin-top    :20px ;
      align-self: center;
    }    
        .ico{
            font-size:24px;
            color:gray;
        }
        .text{
            margin-top: 11px;
            color:#262627;
            font-size: 14px;
            font-weight: 400;
            line-height:80%;
        }
        .para{
            font-size: 12px;
            color:#737373;
            margin-top: 7px;
            text-align: justify;
        }
    }
   
}
`;





export { Container };
