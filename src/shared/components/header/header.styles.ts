import styled from "styled-components";

export const HeaderWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    hr{
        width: 100vw;
        margin-bottom: 20px;
    }
`;

export const Headerr = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65vw;
`;

// export const Title = styled.span.attrs({className: 'text-headline-lg'});

export const Title = styled.span`
    font-family: Inter;
      /* font-size: ${(props) => props.size|| '16px'}; */
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: -0.01em;
`