import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`;
export const ContainerVideo = styled.div`
    display: flex;
    background: #000;
    flex-direction: column;
    width: 100%;
    overflow: hidden; 

`;


export const VideHeader = styled.div`
    display: flex;
`;

export const BottomCard = styled.div`
    width: 89%;
    box-shadow: 25px 25px 25px rgba(154, 134, 134, 0.25);
    background: '#ffffff';
    height: 70px;
    margin-top: -20px;
    border-radius: 0px 0px 15px 15px;
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const Picture = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100px;
`;

export const Logo = styled.img`
    width: 45px;
    height: 45px;
    
`;


export const Name= styled.h1`
    font-size: 12px;
    color: #ccc;
    font-weight: 300;
    margin-left: 10px;
   
`;

export const Date = styled.h1`
    font-size: 10px;
    color: #ccc;
    margin-top: 5px;
    margin-left: 12px;
    color: #cd84f1;
    font-weight: 500;
`;

export const Topo = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    display: flex;
    align-items: center;
    opacity: 0.2
`;

export const ButoonGrup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const CircleButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: #000;
    border: none;
    margin: 10px
`;

export const ChipView = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 100px;
    color: #000;
    border: none;
    margin: 10px;
    background:#212121;
    flex-direction: row;
    font-weight: bold
`;
