import styled from 'styled-components';

export const Container = styled.div`
  > div {
    .bg-skeleton {
      height: 70px;
      width: 100%;
      filter: brightness(96%);
    }

    span {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-bottom: 175px;

      .avatar-skeleton {
        height: 72px;
        width: 72px;
        border-radius: 50%;
        margin: -36px 0 10px;
        z-index: 1;
      }

      .row-skeleton {
        height: 12px;

        &:nth-child(2) {
          width: 60%;
        }

        &:nth-child(3) {
          width: 50%;
          margin-top: 10px;
        }
      }
    }
  }
`;
