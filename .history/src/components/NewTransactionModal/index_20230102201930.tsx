import { useState } from 'react';

import Modal from 'react-modal';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button
                type='button'
                className='react-modal-close'
                onClick={onRequestClose}
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
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}


                    >
                        <img src={incomeImg} alt="Entry" />
                        <span>Input</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                    >
                        <img src={outcomeImg} alt="Entry" />
                        <span>Output</span>
                    </RadioBox>
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