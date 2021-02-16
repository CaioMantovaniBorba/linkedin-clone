import styled, { css } from 'styled-components';
import { GrLinkedin } from 'react-icons/gr';
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.header`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-header);
  padding: 0 30px;
  z-index: 2;

  @media (min-width: 1180px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  height: 52px;
  max-width: 1128px;
  margin: 0 auto;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      min-width: 90px;
      min-height: 100%;
      background: none;
      border: 0;
      outline: 0;
      color: var(--color-icons);
      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  height: 34px;
  width: 34px;
  color: var(--color-linkedin);
  background-color: #fff;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  margin-left: 12px;
  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5px 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    background: var(--color-white);
  }
`;

const generalIconCSS = css`
  height: 24px;
  width: 24px;
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const NotificationsIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  height: 16px;
  width: 16px;
`;
