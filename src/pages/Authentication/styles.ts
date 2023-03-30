import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Welcome = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray['500']};
  opacity: 0.9;
  margin-bottom: 4px;
`;

export const Form = styled.form`
  margin-top: 32px;

  input {
    width: 384px;
  }

  button {
    margin-top: 32px;
  }
`;
