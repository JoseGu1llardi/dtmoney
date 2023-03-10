import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from './styles';

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