import styled from 'styled-components';

export const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    /* padding-top: 10px; */
    width: 400px;
    height: 100%;
    outline: 4px solid #e65206;
    background-color: rgb(246 248 154);
`
export const DescriptionAvatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: wheat;

    p {
        margin: 5px;
        font-weight: 700;
        font-size: 14px;
        line-height: 1.42;
    }
`

export const Avatar = styled.img`
    border-radius: 50%;
    width: 250px;
    border: 3px solid rgb(240 7 7 / 14%);
`
export const ListStats = styled.ul`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70px;
        border: 1px solid red;
    }

    span {
        margin-bottom: 5px;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.7;
    }
`