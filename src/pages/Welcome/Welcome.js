import React from 'react'

import Title from '../../components/Title'

const Welcome = ({ name, updateName, updateShowTodo }) => {
    const handleWelcomeSubmit = (e) => {
        e.preventDefault();
        updateShowTodo(true)
    }

    return (
        <section>
            <Title>Seja bem-vindo</Title>
            <form onSubmit={handleWelcomeSubmit}>
                <input type="text" value={name} onChange={(e) => updateName(e.target.value)} />
                <button>Iniciar</button>
            </form>
        </section>
    )
}

export default Welcome
