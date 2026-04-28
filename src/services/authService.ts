const KEY = 'usuarioLogado';

export const login = (usuario: any) => {
    localStorage.setItem(KEY, JSON.stringify(usuario));
};

export const getUsuarioLogado = () => {
    const user = localStorage.getItem(KEY);
    return user ? JSON.parse(user) : null;
};

export const logou = () => {
    localStorage.removeItem(KEY)
}