import { useState } from 'react';

import Modal from 'react-modal';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo Guillardi Money" />
                <button onClick={handleOpenNewTransactionModal}>
                    New transaction
                </button>

                <Modal
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Register transaction</h2>
                </Modal>
            </Content>
        </Container>
    )
}