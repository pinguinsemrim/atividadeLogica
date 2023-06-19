//atividade 1
function maior(N1,N2){//criando a função e os parametros
    if(isNaN(N1) || isNaN(N2)){console.log("coloca numero")}else{//verificando se é ou não numero
    let n1 = parseFloat(N1)//transformando N1 em variavel tipo float
    let n2 = parseFloat(N2)//transformando N2 em variavel tipo float
    if(n1>n2){//verificando se n1 é maior que n2
        console.log(`O ${n1} é maior que ${n2}`)//retornado que o n1 é maior que n2
    }else if(n2>n1){console.log(`O segundo numero é maior que o primeiro`)//verificando n2 é maior que n1 e retornado
    }else{console.log("ambos são iguais")}}}//else para retonar que os numeros são iguais e retornando 
    maior('3','3')//chamando a função
//atividade 2
function diaIdade(idade){//criando função e pedindo o parametro
if(isNaN(idade)){console.log("coloca um numero por favor")}else{//verificando se é numero ou não
    let Ida = parseFloat(idade)*365.25//tranfomando em float e multiplicando pela quantidade de dias no ano contando com nos bisextos
    console.log(Ida)}}//retornado a idade em dias
    diaIdade(12)//chamando a variavel
//atividade 3
function caldor9000(Mes){// criando a função como ja mostrei anteriormente
if(isNaN(Mes)){console.log('é para botar um numero')}else{// verificando se é numero denovo e retornado ao user 
    let mes = parseFloat(Mes)//transformando o parametro em um float
    switch(mes){//começando um switch
        case 1:console.log('janeiro');break;//caso o mes for um é janeiro
        case 2:console.log('fevereiro');break;//caso o mes for dois é fevereiro
        case 3:console.log('março');break;//caso o mes for tres é março
        case 4:console.log('abril');break;//caso o mes for quatro é abril
        case 5:console.log('maio');break;//caso o mes for cinco é maio
        case 6:console.log('junho');break;//caso o mes for seis é junho
        case 7:console.log('julho');break;//caso o mes for sete é julho
        case 8:console.log('agosto');break;//caso o mes for oito é agosto
        case 9:console.log('setembro');break;//caso o mes for nove é setembro
        case 10:console.log('outubro');break;//caso o mes for dez é outubro
        case 11:console.log('novembro');break;//caso o mes for onze é novembro
        case 12:console.log('dezembro');break;//caso o mes for doze é dezembro
        default:console.log("esse mes que voce colocou ainda não existe ou se ja existir me avise que atualizo o app");break;}}}//se não for nem uma das opções anteriores retornado para o usuario
caldor9000(10)//chamando a função
//atividade 4  
function inverse(X){
if(isNaN(X)){if(X == 'true' || X == true){
return false
}else if(X == 'false' || X == false){
return true
}else{
return `voce não colocou nem boolean nem numero isto é um ${typeof X}`
}}else{let x = parseFloat(X)*-1
    return x }}
console.log(inverse("false"))
//atividade 5
function mutipliz(y,x){
    if(isNaN(x) || isNaN(y)){
        return("coloque um numero")
    }else{
        if(x<0 || y<0){
            return("coloque um numero positivo")
        }else{
            let ya=y
            for(let i=1;i<x;i++){
                ya+=y;}
            return ya}}}
    console.log(mutipliz(40,28))
// atividade 6
function inArray(r,nR){
    if(isNaN(nR)){
        return'coloque um numero no nR'}else{
            let aR = [] 
            for(let i =1;i<=nR;i++){
                aR.push(r)}return aR}}
console.log(inArray('fogo',5))
// atividade 7
let arrayzinho = [1,2,3,4,5,6,7,8,9]
function filtro(a){
    if(!Array.isArray(a)){
        return "coloque um array"
    }else{
       let b=[]
        a.forEach((i)=>{
            if(typeof a[i] == 'number'){
                b.push(a[i])}})
            return b}}
console.log(filtro(arrayzinho))
