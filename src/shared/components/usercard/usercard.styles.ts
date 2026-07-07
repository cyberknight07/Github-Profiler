import styled from "styled-components";

type ParaProps = {
    // color: string | '';
    size: string | '';
    weight: number | '';
}

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    border: 1px solid #9ca3af;
    border-radius: 4px;
    width: 30vw;
    gap: 10px;

    img{
        width: 50px;
        border-radius: 50%;
    }
`

export const Para = styled.p<ParaProps>`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-size: ${(props) => props.size|| '16px'};
      font-weight: ${(props) => props.weight || 400};
      line-height: 1.2;
      letter-spacing: -0.01em;
      text-align: start;
`

export const ImageDiv = styled.div`
    border-radius: 50%;
    width: 50px;
`