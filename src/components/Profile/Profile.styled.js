import styled from 'styled-components';

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  height: 100%;
  outline: rgb(230 82 6 / 33%) solid 2px;
  background-color: rgb(255 235 59 / 4%);
`;
export const DescriptionAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #b5c08221;

  p {
    margin: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.42;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 250px;
  border: 1px solid #ff000047;
`;
export const ListStats = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    border: 1px solid #ff000047;
  }

  span {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.7;
  }
`;
