exports.login = (req, res) => {
  const { usuario, senha } = req.body;

  if (usuario === 'admin' && senha === '123') {
    return res.status(200).json({ mensagem: 'Login realizado com sucesso!' });
  }

  return res.status(401).json({ mensagem: 'Credenciais inválidas' });
};
