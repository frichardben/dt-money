import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpeNewTransactionModal: () => void;
}


export function Header({ onOpeNewTransactionModal }: HeaderProps) {
    return(
        <Container>
            <Content>
                <img src={logo} alt="dt money"/>
                <button type="button" 
                    onClick={onOpeNewTransactionModal} >
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}