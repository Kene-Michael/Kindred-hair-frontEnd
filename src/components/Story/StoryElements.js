import styled from 'styled-components';

export const StoryContainer = styled.div`
    background: #225350;
    width: 100vw;
    height: 100%;
    padding: 2rem;

`;

export const StoryWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 50% 50% ;
    /* grid-column-gap: 8rem; */
    justify-content: space-evenly;
        margin: 5rem 8rem 5rem 6.5rem;
        .story-text{
            color: #fff;
            font-family: Pangram;
            font-weight: 400;
            font-style: normal;
            font-size: 19px;
            line-height: 35px;
            margin:0 2.5rem 0 3rem;

        }
        .story-heading {
            font-family: Sunflora;
            font-weight: 400;
            font-style: normal;
            font-size: 65px;
            line-height: 60px;
            letter-spacing: -5%;
            margin: -2rem 0 1rem 0;

            

        }
        .story-text1{
           margin-bottom: 4rem; 
           text-align: justify;
            
        }
        .rectangle2 {
            position: absolute;
            top: 180px;
            left: -50px;

        }
        .rectangle3 {
            position: absolute;
            top: 100px;
            left: -102px;

        }
        .rectangle4 {
            position: absolute;
            top: 320px;
            left: -70px;

        }
        .rectangle5 {
            position: absolute;
            top: 400px;
            left: 30px;

        }
        .rectangle6 {
            position: absolute;
            top: 175px;
            left: 415px;

        }
        .rectangle7 {
            position: absolute;
            top: 255px;
            left: 379px;

        }
`;