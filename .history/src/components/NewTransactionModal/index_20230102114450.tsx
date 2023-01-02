import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type='button'
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="Logo close modal" />
            </button>

            <Container>
                <h2>Register transaction</h2>

                <input
                    type='text'
                    placeholder='Title'
                />

                <input
                    type='number'
                    placeholder='Value'
                />

                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={incomeImg} alt="Entry" />
                    </button>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder='Category'
                />

                <button type='submit'>
                    Register
                </button>
            </Container>
        </Modal>
    )
}