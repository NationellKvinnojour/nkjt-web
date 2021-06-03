import React, { useState } from "react";
import { connect, styled } from "frontity";
import Switch from "@frontity/components/switch";

import List from "./list";
import Post from "./post";
import Page from "./page";

import DoorOpen from "../../assets/door-open.svg";
import DoorClosed from "../../assets/door-closed.svg";

const Main = ({ state }) => {
    const data = state.source.get(state.router.link);

    // const [ roomBusyOne, setRoomBusyOne ] = useState(false);
    // const [ roomBusyTwo, setRoomBusyTwo ] = useState(false);
    // const [ roomBusyThree, setRoomBusyThree ] = useState(false);
    // const [ roomBusyFour, setRoomBusyFour ] = useState(false);
     
    return (
        <MainContainer>
            {/* <ColumnContainer>
                <Column>
                    <h3>Hej och välkommen till NJKT</h3>
                    <p>Vi hjälper döva, hörselskadade och dövblinda kvinnor, icke-binära och unga tjejer från 15 år och uppåt, med att ta makten över sina liv från våld och förtryck.
                    Här hos oss får man stöd och hjälp direkt på svenskt teckenspråk.</p>
                </Column>
                <Column>
                    <h3>Hej 👋 Vill ni chatta med oss på video eller chatt?</h3>
                    <p>Klicka på ett rum nedan för att komma till en av våra kurator mellan våra öppetider.</p>

                    <h3>Video chatt och text chatt Öppetider</h3>
                    <p><strong>Drop-in:</strong></p>
                    <p>Måndag - Söndag kl. 18:00 - 21:00</p>
                    <ButtonContainer>
                        <RoomLinkContainer onClick={() => setRoomBusyOne(true)}>
                            <RoomLink 
                                href="https://whereby.com/hippos-project-group-3" 
                                target="_blank"
                                className={roomBusyOne && "room-busy"}
                            >
                                <InnerContainer>
                                    <RoomTitle>Rum 1</RoomTitle>
                                    {!roomBusyOne && <DoorImage src={DoorOpen} alt="Ikon av ett öppet dörr" />}
                                    {roomBusyOne && <DoorImage src={DoorClosed} alt="Ikon av ett stängd dörr" />}
                                    <RoomStatusText>
                                        {!roomBusyOne ? "Rummet är tillgänglig" : "Rummet är upptagen"}
                                    </RoomStatusText>
                                </InnerContainer>
                            </RoomLink>
                        </RoomLinkContainer>
                        <RoomLinkContainer onClick={() => setRoomBusyTwo(true)}>
                            <RoomLink 
                                href="https://nkjt.daily.co/nkjt-rum-1" 
                                target="_blank"
                                className={roomBusyTwo && "room-busy"}
                            >
                                <InnerContainer>
                                    <RoomTitle>Rum 2</RoomTitle>
                                    {!roomBusyTwo && <DoorImage src={DoorOpen} alt="Ikon av ett öppet dörr" />}
                                    {roomBusyTwo && <DoorImage src={DoorClosed} alt="Ikon av ett stängd dörr" />}
                                    <RoomStatusText>
                                        {!roomBusyTwo ? "Rummet är tillgänglig" : "Rummet är upptagen"}
                                    </RoomStatusText>
                                </InnerContainer>
                            </RoomLink>
                        </RoomLinkContainer>
                        <RoomLinkContainer onClick={() => setRoomBusyThree(true)}>
                            <RoomLink 
                                href="https://whereby.com/hippos-project-group-3" 
                                target="_blank"
                                className={roomBusyThree && "room-busy"}
                            >
                                <InnerContainer>
                                    <RoomTitle>Rum 3</RoomTitle>
                                    {!roomBusyThree && <DoorImage src={DoorOpen} alt="Ikon av ett öppet dörr" />}
                                    {roomBusyThree && <DoorImage src={DoorClosed} alt="Ikon av ett stängd dörr" />}
                                    <RoomStatusText>
                                        {!roomBusyThree ? "Rummet är tillgänglig" : "Rummet är upptagen"}
                                    </RoomStatusText>
                                </InnerContainer>
                            </RoomLink>
                        </RoomLinkContainer>
                        <RoomLinkContainer onClick={() => setRoomBusyFour(true)}>
                            <RoomLink 
                                href="https://whereby.com/hippos-project-group-3" 
                                target="_blank"
                                className={roomBusyFour && "room-busy"}
                            >
                                <InnerContainer>
                                    <RoomTitle>Rum 4</RoomTitle>
                                    {!roomBusyFour && <DoorImage src={DoorOpen} alt="Ikon av ett öppet dörr" />}
                                    {roomBusyFour && <DoorImage src={DoorClosed} alt="Ikon av ett stängd dörr" />}
                                    <RoomStatusText>
                                        {!roomBusyFour ? "Rummet är tillgänglig" : "Rummet är upptagen"}
                                    </RoomStatusText>
                                </InnerContainer>
                            </RoomLink>
                        </RoomLinkContainer>     
                    </ButtonContainer>
                </Column>
            </ColumnContainer> */}
            <Switch>
                <List when={data.isArchive} />
                <Post when={data.isPost} />
                <Page when={data.isPage} />
            </Switch>
        </MainContainer>
    );
};

export default connect(Main);

const MainContainer = styled.main`
    margin: 20px;

    & > img {
        max-width: 100%;
        object-fit: contain;
    }
    & > p {
        line-height:  1.5em;
    }
    @media(min-width: 1143px){
        margin: auto;
        max-width: 1100px;
    }
`;

const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`;

const Column = styled.div`
    width: 45%;
    height: 600px;
    margin: auto;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
`;

const RoomLinkContainer = styled.div`
    margin: 10px;
`;

const RoomLink = styled.a`
    width: 150px;
    height: 150px;
    /* margin: 10px; */
    background-color: ${props => props.className === "room-busy" ? "#ff8080" :  "#b3ffb3"};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    &:hover {
        background-color: ${props => props.className === "room-busy" ? "#ff6666" :  "#99ff99"};
        cursor: pointer;
    }
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RoomTitle = styled.h3`
    margin: 0;
`;

const DoorImage = styled.img`
    width: 60px;
`;

const RoomStatusText = styled.p`
    color: #000;
    padding: 0;
    margin: 0;
`;