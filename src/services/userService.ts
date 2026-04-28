const KEY = 'usuarios';

// pegar usuarios
export const getUsuarios = () => {
    const dados = localStorage.getItem(KEY);
    return dados ? JSON.parse(dados) : [];
};

// salvar usuarios
export const setUsuarios = (usuarios: any) => {
    localStorage.setItem(KEY, JSON.stringify(usuarios));
};

// adicionar usuario
export const addUsuario = (novoUsuario: any) => {
    const usuarios = getUsuarios();
    usuarios.push(novoUsuario);
    setUsuarios(usuarios);
}

// buscar usuario
export const findUsuario = (email: any, senha: any) => {
    const usuarios = getUsuarios();
    return usuarios.find(
        (u: { email: any; senha: any; }) => u.email === email && u.senha === senha
    );
};

// verificar se email já existe
export const emailExiste = (email: any) => {
    const usuarios = getUsuarios();
    return usuarios.some((u: { email: any; }) => u.email === email)
}