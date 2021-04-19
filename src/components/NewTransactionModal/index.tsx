import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImge from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './style';

interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overley'
            className='react-modal-content'
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal"/>
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input 
                    placeholder="Título"
                />
                
                <input 
                    type="number"
                    placeholder="valor"
                />

                <TransactionTypeContainer>
                    <button
                        type="button"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>

                    </button>

                    <button
                        type="button"
                    >
                        <img src={outcomeImge} alt="Saída" />
                        <span>Saída</span>

                    </button>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
          
        </Modal>
    );
}