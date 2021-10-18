function verificar(){
    let data = new Date()
    let ano  = data.getFullYear()
    const fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    // verificar se o ano não é vazio
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        // criar uma tag dinamicamente com js
        let img = document.createElement('img')
        // setar um id direto pelo js
        img.setAttribute('id', 'foto')
        // Verifica o radiobutton marcado no caso [0] é masculino e [1] feminino
        if(fsex[0].checked) {
            genero = 'Masculino'
            // testar se é uma criança
            if(idade >= 0 && idade < 10) {
                // criança
                // setar imagem direto pelo js
                img.setAttribute('src', 'imagens/h-crianca.jpg')
            }else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/h-jovem.jpg')
            }else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/h-homem.jpg')
            }else {
                // Idoso
                img.setAttribute('src', 'imagens/h-idoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Feminino'

            if(idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/m-crianca.jpg')
            }else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/m-jovem.jpg')
            }else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/m-mulher.jpg')
            }else {
                // Idoso
                img.setAttribute('src', 'imagens/m-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos Gênero ${genero} com ${idade} anos.`
        // fazer aparecer a imagem, para adicionar a tag img dentro  da div res usa o appenChild insere um elemento filho em  um elemento pai.
        res.appendChild(img)
    }
}