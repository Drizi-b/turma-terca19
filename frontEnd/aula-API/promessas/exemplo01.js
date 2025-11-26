const p = new Promise (resolverPromessa => {
    resolverPromessa([
        {
            id: 1,
            nome: 'Welinton',
            idade: 40
        },
        {
            id: 2,
            nome: 'Adriana',
            idade: 49
        },
        {
            id: 3,
            nome: 'Leonardo',
            idade: 16
        },
])
})
p.then(JSON.stringify) //transf em JSON ou seja, string
.then(JSON.parse) //transf novamente em objeto
.then(valor => valor.forEach(el => {
    console.log(el.nome, el.idade) //paraCada elemento, imprime somente o nome e a idade
}))
