const catalogo = require("./database/catalogo.json")

function adicionarFilme(codigo,titulo,duracao,atores,anoDeLancamento,emCartaz){
    {
       let filme = {
           codigo: codigo,
           titulo: titulo,
           duracao: duracao,
           atores: atores,
           anoDeLancamento:anoDeLancamento,
           emCartaz:emCartaz
       }
       catalogo.push(filme)
    }
}

function buscarFilme(codigo){
    let filmeEncontrado
    catalogo.forEach((filme) => {
        if(filme.codigo === codigo) {
            filmeEncontrado = filme
        }  
    })

    return filmeEncontrado
}


function alterarStatusEmCartaz(codigo){
    const filmeEncontrado = buscarFilme(codigo)
    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz


}

const listarTodosOfilmes = ()=> {
    const catalogoAmigavel = catalogo.map((filme)=>{
        return (filme.titulo + '-' + filme.anoDeLancamento)
    })

    return catalogoAmigavel
}

const listarFilmesEmCartaz = catalogo.filter((filme)=>{
    return filme.emCartaz === true;
})  


listarFilmesEmCartaz();