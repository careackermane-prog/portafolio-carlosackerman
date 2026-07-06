const base = import.meta.env.BASE_URL;
export const template = `
<header>
    <div class="container">

        <h1>Carlos Ackerman</h1>

        <button id="hamburger" class="hamburger">
            ☰
        </button>

        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre">Sobre mí</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>

    </div>
</header>

<main>

<section id="inicio" class="hero">

    <div class="container hero-content">

        <div class="hero-text">

            <p class="terminal">
                > Bienvenido a mi portafolio profesional...
            </p>

            <h4>Técnico en Soporte y Mantenimiento Informático</h4>

            <h3 id="typing"></h3>

            <p>
                Brindo soluciones tecnológicas especializadas en mantenimiento preventivo y correctivo de computadoras, reparación de laptops e impresoras, instalación y configuración de sistemas operativos, actualización de hardware, eliminación de virus, optimización del rendimiento y soporte técnico para hogares, empresas e instituciones.
            </p>

           <p>
    Brindo soluciones tecnológicas especializadas en mantenimiento preventivo y correctivo de computadoras, reparación de laptops e impresoras, instalación y configuración de sistemas operativos, actualización de hardware, eliminación de virus, optimización del rendimiento y soporte técnico para hogares, empresas e instituciones.
</p>

<div class="hero-icons">

    <div>
        <i class="fas fa-desktop"></i>
        <span>PC</span>
    </div>

    <div>
        <i class="fas fa-laptop"></i>
        <span>Laptops</span>
    </div>

    <div>
        <i class="fas fa-print"></i>
        <span>Impresoras</span>
    </div>

    <div>
        <i class="fas fa-microchip"></i>
        <span>Hardware</span>
    </div>

</div>

<div class="hero-buttons">

    <button id="btnProjects">
        Ver Servicios
    </button>

    <a href="#contacto" class="btnContact">
        Contactarme
    </a>

</div>

        </div>

        <div class="hero-image">
            <img src="${base}hero.jpeg" alt="Carlos Ackerman">
        </div>

    </div>

</section>


<section id="servicios" class="services">

    <div class="container">

        <h2>Servicios Profesionales</h2>

        <div class="services-grid">

            <div class="service-card">
                <i class="fas fa-desktop"></i>
                <h3>Mantenimiento de Computadoras</h3>
                <p>Mantenimiento preventivo y correctivo para equipos de escritorio.</p>
            </div>

            <div class="service-card">
                <i class="fas fa-laptop"></i>
                <h3>Reparación de Laptops</h3>
                <p>Diagnóstico y reparación de fallas de hardware y software.</p>
            </div>

            <div class="service-card">
                <i class="fas fa-print"></i>
                <h3>Reparación de Impresoras</h3>
                <p>Servicio técnico para impresoras de tinta y láser.</p>
            </div>

            <div class="service-card">
                <i class="fas fa-download"></i>
                <h3>Instalación de Software</h3>
                <p>Windows, Office, antivirus, drivers y programas especializados.</p>
            </div>

            <div class="service-card">
                <i class="fas fa-memory"></i>
                <h3>Actualización de Hardware</h3>
                <p>SSD, memoria RAM, tarjetas y mejora del rendimiento.</p>
            </div>

            <div class="service-card">
                <i class="fas fa-shield-virus"></i>
                <h3>Eliminación de Virus</h3>
                <p>Limpieza completa de malware y protección del sistema.</p>
            </div>

        </div>

    </div>

</section>


<section id="sobre">

    <div class="container about-container">

        <div class="about-text">

            <h2>Sobre Mí</h2>

            <p>
                Soy <strong>Carlos Ackerman</strong>, técnico especializado en soporte y mantenimiento informático con experiencia en diagnóstico, reparación y optimización de equipos de cómputo.
            </p>

            <p>
                Me especializo en mantenimiento preventivo y correctivo de computadoras, reparación de laptops e impresoras, instalación de sistemas operativos, eliminación de virus y actualización de hardware.
            </p>

            <p>
                Mi objetivo es ofrecer soluciones rápidas, confiables y profesionales para hogares, empresas e instituciones.
            </p>

        </div>

        <div class="about-card">

            <h3>Información Profesional</h3>

            <ul>

                <li><i class="fas fa-user"></i> Carlos Ackerman</li>

                <li><i class="fas fa-laptop-medical"></i> Técnico Informático</li>

                <li><i class="fas fa-map-marker-alt"></i> Danlí, El Paraíso</li>

                <li><i class="fas fa-clock"></i> Disponibilidad Inmediata</li>

                <li><i class="fas fa-tools"></i> Soporte Técnico Profesional</li>

            </ul>

        </div>

    </div>

</section>


<section id="experiencia" class="experience">

    <div class="container">

        <h2>Experiencia</h2>

        <div class="experience-grid">

            <div class="exp-card">
                <h3>6+</h3>
                <p>Años de experiencia</p>
            </div>

            <div class="exp-card">
                <h3>500+</h3>
                <p>Equipos Reparados</p>
            </div>

            <div class="exp-card">
                <h3>350+</h3>
                <p>Clientes Satisfechos</p>
            </div>

            <div class="exp-card">
                <h3>24/7</h3>
                <p>Soporte Técnico</p>
            </div>

        </div>

    </div>

</section>

<section id="habilidades" class="skills">

    <div class="container">

        <h2>Habilidades</h2>

        <div class="skill">

            <span>Hardware</span>

            <div class="progress">
                <div class="progress-bar" style="width:95%">95%</div>
            </div>

        </div>

        <div class="skill">

            <span>Windows</span>

            <div class="progress">
                <div class="progress-bar" style="width:98%">98%</div>
            </div>

        </div>

        <div class="skill">

            <span>Redes</span>

            <div class="progress">
                <div class="progress-bar" style="width:85%">85%</div>
            </div>

        </div>

        <div class="skill">

            <span>Impresoras</span>

            <div class="progress">
                <div class="progress-bar" style="width:90%">90%</div>
            </div>

        </div>

    </div>

</section>

<section id="galeria" class="gallery">

    <div class="container">

        <h2>Trabajos Realizados</h2>

        <div class="gallery-grid">

            <img src="${base}pc.png">

            <img src="${base}laptop.png">

            <img src="${base}impresora.jpg">

            <img src="${base}hardware.jpg">

            <img src="${base}virus.jpg">

            <img src="${base}taller.jpg">

        </div>

    </div>

</section>


<section id="contacto" class="contact">

    <div class="container">

        <h2>Contáctame</h2>

        <form>

            <input type="text" placeholder="Nombre">

            <input type="email" placeholder="Correo">

            <input type="tel" placeholder="Teléfono">

            <textarea placeholder="Escribe tu mensaje"></textarea>

            <button type="submit">Enviar Mensaje</button>

        </form>

    </div>

</section>

</main>

<footer>

    <div class="container">

        <h2>Carlos Ackerman</h2>

        <p>Técnico en Soporte y Mantenimiento Informático</p>

        <div class="social">

            <a href="#"><i class="fab fa-facebook"></i></a>

            <a href="#"><i class="fab fa-instagram"></i></a>

            <a href="#"><i class="fab fa-whatsapp"></i></a>

            <a href="#"><i class="fab fa-github"></i></a>

        </div>

        <p>© 2026 Todos los derechos reservados.</p>

    </div>

</footer>
`;