import styled from 'styled-components';

export const StatisticsSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;

    h2 {
    display: flex;
    align-items: center;
    justify-content: center;   
    width: 100%;
    height: 50px;
    margin:0;
    border: 1px solid #0b3ea6;
    background-color: #d9f5f4a8;
    }


`
export const StatisticsList = styled.ul`
    display: flex;
    gap: 15px;
    
    li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 89px;
    border: 1px solid black;
    }
`