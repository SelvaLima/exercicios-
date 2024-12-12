function leiahora(){ //essa funcao esta sendo carregada automaticamente na pagina
    console.log('sim, ele leu a funcao') //teste se a funcao foi lida corretament+3.,
    

    const d =new Date()  // pega a data do pc
    let hora = d.getHours()   //pega a hora da data

//console.log(d) variavel data completa
//console.log(hora); //variavel hora  

if (hora<18){
console.log('bom dia')  //teste para if 
 //document.body.style.backgroundColor = 'red' LINHA DE CODIGO CASO NAO HOUVESSE ESTILO CSS
 document.body.classList = 'noite'
}

    else{
console.log('boa noite') //teste para ifelse
 //document.body.style.backgroundColor = 'green' LINHA DE CODIGO CASO NAO HOUVESSE ESTILO CSS
 document.body.classList = 'dia'
}


}



