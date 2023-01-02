import Modal from 'react-modal';

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