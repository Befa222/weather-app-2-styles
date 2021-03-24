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

    @media all and (orientation: landscape){
            top: 1%;
            width: 9vw;
            height: 9vw;
        }
    
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
        
        @media all and (orientation: landscape){
            width: 12vw;
            height: 12vw;
            top: 50%;
            right: 15vw;
        }
`

export const CircleLarge = styled.div`
    position: absolute;
    width: 45vw;
    height: 45vw;
    border-radius: 50%;
    background: linear-gradient(
        to right bottom, 
        orange, purple);
    bottom: 12vh;
    left: 4vw;

        @media all and (orientation: landscape){
            width: 25vw;
            height: 25vw;
            bottom: 1%;
            left: 1%;
        }
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

    @media all and (orientation: landscape){
            width: 15vw;
            height: 15vw;
        }
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

        @media all and (orientation: landscape){
            width: 50vw;
            top: 1vh;
            left: 25vw;
        }
`

export const GlassContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: black;
    width: 75vw;
    height: 60vh;
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
    text-align: center;
    border-radius: 15px;
    z-index: 4;

    @media all and (orientation: landscape){
        font-size: 3vw;
        width: 50%;
    }
`
export const DateContainer = styled.div`
    font-family: 'Baloo2';
    font-size: 6vw;
    font-style: italic;
    color: silver;
    text-shadow: 2px 2px grey;
    border: none;

    @media all and (orientation: landscape){
        font-size: 2vw;
        width: 50%;
        text-align: center;
    }
`
export const TempContainer = styled.div`
    font-family: 'Baloo2';
    color: silver;
    text-shadow: 2px 2px grey;
    font-size: 23vw;
    font-weight: 800;
    border: none;

    @media all and (orientation: landscape){
        font-size: 8vw;
        width: 50%;
        text-align: center;
    }
`
export const WeatherContainer = styled.div`
    font-family: 'Baloo2';
    color: silver;
    text-shadow: 2px 2px grey;
    font-size: 10vw;
    border: none;

    @media all and (orientation: landscape){
        font-size: 2.5vw;
        width: 50%;
        text-align: center;
    }
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
        
    @media all and (orientation: landscape){
        font-size: 2vw;
        width: 40%;
        left: 30%;
        bottom: 1.5vh;
    }
`