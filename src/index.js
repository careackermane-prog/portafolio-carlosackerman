import { template } from "./template";

export function init() {

    document.querySelector("#app").innerHTML = template;

    efectoTyping();

    iniciarEventos();

    menuHamburguesa();

    animarTarjetas();

    formulario();

}

function iniciarEventos(){

    const btn=document.querySelector("#btnProjects");

    btn.addEventListener("click",()=>{

        document.querySelector("#servicios").scrollIntoView({

            behavior:"smooth"

        });

    });

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const destino=document.querySelector(link.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

function menuHamburguesa(){

    const boton=document.querySelector("#hamburger");

    const nav=document.querySelector("header nav");

    boton.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}

function efectoTyping(){

    const textos=[

        "Técnico en Soporte Informático",

        "Mantenimiento Preventivo",

        "Mantenimiento Correctivo",

        "Reparación de Computadoras",

        "Reparación de Laptops",

        "Reparación de Impresoras",

        "Actualización de Hardware",

        "Instalación de Software",

        "Optimización de Equipos",

        "Eliminación de Virus",

        "Soporte Técnico Profesional"

    ];

    const destino=document.querySelector("#typing");

    let palabra=0;

    let letra=0;

    let escribiendo=true;

    function animar(){

        if(escribiendo){

            destino.textContent=textos[palabra].substring(0,letra++);

            if(letra>textos[palabra].length){

                escribiendo=false;

                setTimeout(animar,1500);

                return;

            }

        }else{

            destino.textContent=textos[palabra].substring(0,letra--);

            if(letra<0){

                escribiendo=true;

                palabra++;

                if(palabra>=textos.length){

                    palabra=0;

                }

            }

        }

        setTimeout(animar,60);

    }

    animar();

}

function animarTarjetas(){

    const tarjetas=document.querySelectorAll(".service-card,.exp-card");

    tarjetas.forEach((card,index)=>{

        card.style.opacity="0";

        card.style.transform="translateY(50px)";

        setTimeout(()=>{

            card.style.transition=".6s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*120);

    });

}

function formulario(){

    const form=document.querySelector("form");

    if(!form) return;

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("¡Gracias por tu mensaje! Me pondré en contacto contigo lo antes posible.");

        form.reset();

    });

}