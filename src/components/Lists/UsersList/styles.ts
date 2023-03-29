import styled from 'styled-components';

export const HeaderButton = styled.button`
  outline: 0;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 14px;
  font-weight: 600;
`;


export const Table = styled.table`
  flex: 1;
  width: 100%;
  font-size: 14px;
  border-spacing: 0;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray['-400']};
  overflow: hidden;

  td, th {
    text-align: left;
    padding: 16px;
    width: 31%;
  }

  button {
    outline: 0;
    background: transparent;
    border: none;
    font-weight: 600;
    font-size: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  tbody tr {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray['500']}
  }

  tbody tr:nth-child(2n+2) {
    outline: 1px solid ${({ theme }) => theme.colors.gray['-400']};;
  }

  thead tr {
    background: ${({ theme }) => theme.colors.gray['-200']}
  }

  .actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;

    button {
      height: 40px;
      width: 40px;

      outline: 0;

      img {
        background: transparent;
      }
    }
  }
`;

