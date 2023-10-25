import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
`

export const Section = styled.div`
    height: calc(100vh - 4rem);
` 

export const HeroContent = styled.div`

`