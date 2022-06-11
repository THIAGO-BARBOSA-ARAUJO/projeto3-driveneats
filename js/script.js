let checked1 = document.getElementById("checked1")
let checked2 = document.getElementById("checked2")
let checked3 = document.getElementById("checked3")

let checked4 = document.getElementById("checked4")
let checked5 = document.getElementById("checked5")
let checked6 = document.getElementById("checked6")

let checked7 = document.getElementById("checked7")
let checked8 = document.getElementById("checked8")
let checked9 = document.getElementById("checked9")

let prato, bebida, sobre_mesa

let nome_prato, nome_bebida, nome_sobre_mesa, valor_total

let nome, endereco

let valor_prato1 = 0
let valor_prato2 = 0
let valor_prato3 = 0

/**************************************************************************************************/

let prato1 = document.getElementById("prato1");
let prato2 = document.getElementById("prato2");
let prato3 = document.getElementById("prato3");

/**************************************************************************************************/

let bebida1 = document.getElementById("bebida1");
let bebida2 = document.getElementById("bebida2");
let bebida3 = document.getElementById("bebida3");

/**************************************************************************************************/

let sobre_mesa1 = document.getElementById("sobre_mesa1");
let sobre_mesa2 = document.getElementById("sobre_mesa2");
let sobre_mesa3 = document.getElementById("sobre_mesa3");

/**************************************************************************************************/
function muda_borda_prato1() {
    prato1.classList.add("borda_dinamica")
    prato2.classList.remove("borda_dinamica")
    prato3.classList.remove("borda_dinamica")
    checked1.style.display = "block"
    checked2.style.display = "none"
    checked3.style.display = "none"
    valor_prato1 = document.querySelector("#valor_prato1").innerText
    valor_prato1 = Number(valor_prato1.replace(",", "."))
    valor_prato2 = 0
    valor_prato3 = 0
    prato = document.querySelector("#prato1")
    ativar()
}

function muda_borda_prato2() {
    prato2.classList.add("borda_dinamica")
    prato1.classList.remove("borda_dinamica")
    prato3.classList.remove("borda_dinamica")
    checked1.style.display = "none"
    checked2.style.display = "block"
    checked3.style.display = "none"
    valor_prato1 = 0    
    valor_prato2 = document.querySelector("#valor_prato2").innerText
    valor_prato2 = Number(valor_prato2.replace(",", "."))
    valor_prato3 = 0
    prato = document.querySelector("#prato2")
    ativar()
}

function muda_borda_prato3() {
    prato3.classList.add("borda_dinamica")
    prato2.classList.remove("borda_dinamica")
    prato1.classList.remove("borda_dinamica")
    checked1.style.display = "none"
    checked2.style.display = "none"
    checked3.style.display = "block"
    valor_prato1 = 0    
    valor_prato2 = 0
    valor_prato3 = document.querySelector("#valor_prato3").innerText
    valor_prato3 = Number(valor_prato3.replace(",", "."))
    prato = document.querySelector("#prato3")
    ativar()
}

/***********************bebidas************************************* */


function muda_borda_bebida1() {
    bebida1.classList.add("borda_dinamica")
    bebida2.classList.remove("borda_dinamica")
    bebida3.classList.remove("borda_dinamica")
    checked4.style.display = "block"
    checked5.style.display = "none"
    checked6.style.display = "none"
    valor_bebida1 = document.querySelector("#valor_bebida1").innerText
    valor_bebida1 = Number(valor_bebida1.replace(",", "."))
    valor_bebida2 = 0
    valor_bebida3 = 0
    bebida = document.querySelector("#bebida1")
    ativar()
}

function muda_borda_bebida2() {
    bebida2.classList.add("borda_dinamica")
    bebida1.classList.remove("borda_dinamica")
    bebida3.classList.remove("borda_dinamica")
    checked4.style.display = "none"
    checked5.style.display = "block"
    checked6.style.display = "none"
    valor_bebida1 = 0
    valor_bebida2 = document.querySelector("#valor_bebida2").innerText
    valor_bebida2 = Number(valor_bebida2.replace(",", "."))
    valor_bebida3 = 0
    bebida = document.querySelector("#bebida2")
    ativar()
}

function muda_borda_bebida3() {
    bebida3.classList.add("borda_dinamica")
    bebida2.classList.remove("borda_dinamica")
    bebida1.classList.remove("borda_dinamica")
    checked4.style.display = "none"
    checked5.style.display = "none"
    checked6.style.display = "block"
    valor_bebida1 = 0    
    valor_bebida2 = 0
    valor_bebida3 = document.querySelector("#valor_bebida3").innerText
    valor_bebida3 = Number(valor_bebida3.replace(",", "."))
    bebida = document.querySelector("#bebida3")
    ativar()
}

/***************************sobre-mesas******************************** */

function muda_borda_sobre_mesa1() {
    sobre_mesa1.classList.add("borda_dinamica")
    sobre_mesa2.classList.remove("borda_dinamica")
    sobre_mesa3.classList.remove("borda_dinamica")
    checked7.style.display = "block"
    checked8.style.display = "none"
    checked9.style.display = "none"
    valor_sobre_mesa1 = document.querySelector("#valor_sobre_mesa1").innerText
    valor_sobre_mesa1 = Number(valor_sobre_mesa1.replace(",", "."))
    valor_sobre_mesa2 = 0
    valor_sobre_mesa3 = 0
    sobre_mesa = document.querySelector("#sobre_mesa1")
    ativar()
}

function muda_borda_sobre_mesa2() {
    sobre_mesa2.classList.add("borda_dinamica")
    sobre_mesa1.classList.remove("borda_dinamica")
    sobre_mesa3.classList.remove("borda_dinamica")
    checked7.style.display = "none"
    checked8.style.display = "block"
    checked9.style.display = "none"
    valor_sobre_mesa1 = 0
    valor_sobre_mesa2 = document.querySelector("#valor_sobre_mesa2").innerText
    valor_sobre_mesa2 = Number(valor_sobre_mesa2.replace(",", "."))
    valor_sobre_mesa3 = 0
    sobre_mesa = document.querySelector("#sobre_mesa2")
    ativar()
}

function muda_borda_sobre_mesa3() {
    sobre_mesa3.classList.add("borda_dinamica")
    sobre_mesa2.classList.remove("borda_dinamica")
    sobre_mesa1.classList.remove("borda_dinamica")
    checked7.style.display = "none"
    checked8.style.display = "none"
    checked9.style.display = "block"
    valor_sobre_mesa1 = 0    
    valor_sobre_mesa2 = 0
    valor_sobre_mesa3 = document.querySelector("#valor_sobre_mesa3").innerText
    valor_sobre_mesa3 = Number(valor_sobre_mesa3.replace(",", "."))
    sobre_mesa = document.querySelector("#sobre_mesa3")
    ativar()
}

function ativar() {
     if( prato !== undefined && bebida !== undefined && sobre_mesa !== undefined) {
        document.querySelector(".btn1").style.display = "none"
        document.querySelector(".btn2").style.display = "block"
     }
}

function calcular() {
    valor_total = valor_prato1 + valor_prato2 + valor_prato3 + valor_bebida1 + valor_bebida2 + valor_bebida3 + valor_sobre_mesa1 + valor_sobre_mesa2 + valor_sobre_mesa3
    valor_total = valor_total.toFixed(2)
    
    nome_prato = prato.querySelector("h3").innerText
    
    nome_bebida = bebida.querySelector("h3").innerText
    
    nome_sobre_mesa = sobre_mesa.querySelector("h3").innerText
    
    nome = prompt("Digite seu nome!")
    endereco = prompt("Digite seu endereço!")

    let vfp = prato.querySelector("span").innerText
    let vfb = bebida.querySelector("span").innerText
    let vfs = sobre_mesa.querySelector("span").innerText

    let msg_confirma = `
    <div class="container-confirmar-pedido">
            <div class="content">
                <h3>Confirme seu pedido</h3>
                <div class="informacoes">
                    <div class="col1">
                        <div class="p">
                            <span> ${nome_prato}</span>
                        </div><!--p-->
    
                        <div class="b">
                            <span>${nome_bebida}</span>
                        </div><!--b-->
    
                        <div class="s">
                            <span>${nome_sobre_mesa}</span>
                        </div><!--s-->
    
                        <div class="t">
                            <span>TOTAL</span>
                            
                        </div><!--t-->
                    </div><!--col1-->

                    <div class="col2">
                        <div class="vp">
                            <span>${vfp}</span>
                        </div><!--p-->
    
                        <div class="vb">
                            <span>${vfb}</span>
                        </div><!--b-->
    
                        <div class="vs">
                            <span>${vfs}</span>
                        </div><!--s-->
    
                        <div class="vt">
                            <span>R$ ${valor_total}</span>
                        </div><!--t-->
                    </div><!--col2-->
                </div><!--informacoes-->
                <button class="confirm" onclick="enviar_mensagem()">Tudo certo, pode pedir!</button>
                <p class="cancel" onclick="fechar_tela_fechar_pedido()">Cancelar</p>
            </div><!--content-->
        </div><!--container-confirmar-pedido-->
    `
    document.querySelector(".confirmar-pedido").innerHTML = msg_confirma

    let tela_confirma = document.querySelector(".confirmar-pedido")
    tela_confirma.classList.remove("esconder")


    msg = `
Olá, gostaria de fazer o pedido:
- Prato: ${nome_prato}
- Bebida: ${nome_bebida}
- Sobremesa: ${nome_sobre_mesa}
Total: R$ ${valor_total}`
}

function enviar_mensagem() {
    msg = `
Olá, gostaria de fazer o pedido:
- Prato: ${nome_prato}
- Bebida: ${nome_bebida}
- Sobremesa: ${nome_sobre_mesa}
Total: R$ ${valor_total}

Nome: ${nome}
endereço: ${endereco}
`
    msg_encodada = encodeURIComponent(msg)
    window.open(`https://wa.me/5521966339665?text=${msg_encodada}`)
    
    let tela_confirma = document.querySelector(".confirmar-pedido")
    tela_confirma.classList.add("esconder")
}

function fechar_tela_fechar_pedido() {
    let tela_confirma = document.querySelector(".confirmar-pedido")
    tela_confirma.classList.add("esconder")
}