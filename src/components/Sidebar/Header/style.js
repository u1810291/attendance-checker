import styled from 'styled-components';


export const Header = styled.div`
    grid-area: header;
    display: grid;
    place-items: center;
    height: var(--navbar-height);
    box-sizing: border-box;
    padding: 20px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
