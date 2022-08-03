import styled from '@emotion/styled';

export const AddButton = styled.button`
  /* margin-left: 40%; */

  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;
  background-color: ${props => props.theme.colors.accent};
  padding: 6px 12px;
  border-radius: 4px;
  margin-top: 10px;
  transition-property: color, background-color, transform;
  transition-duration: 0.2s;
  transition-timing-function: ${props => props.theme.animations.cubicBezier};
  transform: scale(0.9);

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.white};
    transform: scale(1);
  }
`;
export const Blok = styled.div`
  display: flex;
  justify-content: center;
`;
