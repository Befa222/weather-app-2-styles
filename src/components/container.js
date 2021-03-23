import styled from 'styled-components'

export const CircleSmall = styled.div`
    position: absolute;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    background-color: white;
    background: linear-gradient(
        to left top, 
        purple,orange);
    top: 35%;
    left: 7%;
`
export const CircleMedium = styled.div`
    position: absolute;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    background: linear-gradient(
        to left top, 
        purple,orange);
    top: 55%;
    right: 3%;
`

export const CircleLarge = styled.div`
    position: absolute;
    width: 55vw;
    height: 55vw;
    border-radius: 50%;
    background: linear-gradient(
        to right bottom, 
        orange, purple);
    bottom: -10vh;
    left: -20vw;
`
export const CircleLarge2 = styled.div`
    position: absolute;
    width: 55vw;
    height: 55vw;
    border-radius: 50%;
    background: linear-gradient(
        to right bottom, 
        orange, purple);
    top: 5vh;
    right: 1vw;
`

export const SearchContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75vw;
    height: 7vh;
    top: 2vh;
    left: 12.5vw;
    border-radius: 25px;
    background: white;
    background: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(0.5rem);
    z-index: 3;
`

export const GlassContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: black;
    width: 75vw;
    height: 74vh;
    left: 12.5vw;
    top: 13vh;
    border-radius: 15px;
    background: white;
    background: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(0.5rem);
    z-index: 3;
`
export const CityContainer = styled.div`
    font-family: 'Baloo2';
    font-size: 7vw;
    color: silver;
    text-shadow: 2px 2px grey;
    width: 90%;
    height: 7%;
    text-align: center;
    border-radius: 15px;
    z-index: 4;
`
export const DateContainer = styled.div`
    font-family: 'Baloo2';
    font-size: 6vw;
    font-style: italic;
    color: silver;
    text-shadow: 2px 2px grey;
    border: none;
`
export const TempContainer = styled.div`
    font-family: 'Baloo2';
    color: silver;
    text-shadow: 2px 2px grey;
    font-size: 23vw;
    font-weight: 800;
    border: none;
`
export const WeatherContainer = styled.div`
    font-family: 'Baloo2';
    color: silver;
    text-shadow: 2px 2px grey;
    font-size: 10vw;
    border: none;
`
export const IconContainer = styled.div`
    border: none;
`

export const StyleButton = styled.button`
    font-family: 'Baloo2';
    color: silver;
    text-shadow: 2px 2px grey;
    position: absolute;
    bottom: 2vh;
    width: 55vw;
    left: 22.5vw;
    padding: 5px;
    font-size: 6vw;
    border: none;
    outline: none;
    border-radius: 25px;
    background: white;
    background: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.1)
    );
    backdrop-filter: blur(2rem);
    z-index: 3;
`