import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface Props {
  onClick: () => void;
}

export function Header({ onClick }: Props) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt='logo' />
        <button type='button' onClick={onClick}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
