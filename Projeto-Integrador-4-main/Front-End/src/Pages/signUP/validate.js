export default function Validate(values) {
    let erros = {};

    if(!values.username.trim()){
        erros.username = 'Preencha este campo. '
    }

    if(!values.email) {
        erros.email = 'Preencha o E-mail. '
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        erros.email = 'Endereço de e-mail inválido. '
    }

    if(!values.password) {
        erros.password = 'Digite a sua senha. '
    } else if(values.password.length < 8) {
        erros.password = 'A senha deve ter 8 caracteres ou mais. '
    }

    if(!values.passwordConfirm){
        erros.passwordConfirm = 'Repita a sua senha. '
    } else if(values.passwordConfirm !== values.password){
        erros.passwordConfirm = 'As senhas não coincidem. '
    }

    return erros;
}