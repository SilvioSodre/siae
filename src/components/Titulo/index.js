import styled from 'styled-components'
import db from '../../../db.json'

export const Titulo = styled.div`
  margin: 20px;
  text-align: center;
  font-size: 50px;
  color: ${({ theme }) => db.theme.colors.primaryText};
`;

export default Titulo;