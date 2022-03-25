import styled from 'styled-components';

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

export { Insights }