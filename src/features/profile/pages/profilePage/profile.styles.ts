import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    alignItems: center;
    flex: 1;
`;

export const Container = styled.div`
    display: flex;
    alignItems: center;
    width: 65vw;
    gap: 20px;
`;

export const ImageDiv = styled.div`
    width: 180px;
    
    img{
        object-fit: fill;
        width: 180px;
        height: 180px;
        border-radius: 100%;
    }
`;

export const ProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    span{
        display: flex;
        gap: 4px;
        align-items: center;
    }

    p{
        text-align: left;
    }

    button{
        margin-top: 10px;
    }
`;

export const RouteCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65vw;
    padding-top: 20px;
    padding-bottom: 20px;
`

export const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`