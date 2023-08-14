import { v4 as uuidv4 } from 'uuid';

export function cadastrarUsuario(nome, email, senha) {
    const novoUsuario = {
        id: uuidv4(),
        nome,
        email,
        senha
    };

    // Salvar o novo usuário na Local Storage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    return novoUsuario;
}