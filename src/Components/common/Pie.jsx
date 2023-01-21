import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Pie = () => {
    return (
        <footer class="navbar navbar-dark bg-dark py-5">
      <section class="container">
        <div class="d-flex align-items-center mb-4 col-12">
          <div>
            <a href="index.html" class="navbar-brand fuente">RollingBank</a>
          </div>
          <div class="text-secondary">
            <a href="#"
              ><i class="bi bi-facebook text-secondary fs-4 ms-3"></i
            ></a>
            <a href="#"
              ><i class="bi bi-instagram text-secondary fs-4 ms-3"></i
            ></a>
            <a href="#"
              ><i class="bi bi-twitter text-secondary fs-4 ms-3"></i
            ></a>
          </div>
        </div>

        <div class="text-secondary">
          <h4>Navegacion</h4>
          <div class="d-flex flex-direction-column">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#" class="nav-link">¿Quienes somos?</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Precios</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Seguridad</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Ayuda</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Robo o extravio</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="text-secondary">
          <h4>Legales</h4>
          <div>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#" class="nav-link">Regimen de transparencia</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Usuario bancario</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Conducta bancaria</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">Estados contables</a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">terminos y condiciones</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-25 d-flex align-self-start">
          <img src="img/usuariosfinancieros.png" width="100%" alt="" />
        </div>
        <div class="d-flex flex-column text-secondary">
          <h5>Unete</h5>
          <div class="mb-3">
            <img src="img/badge-apple-store.svg" alt="iphone" />
          </div>
          <div>
            <img src="img/google-play-badge-bb.svg" alt="Play store" />
          </div>
        </div>
      </section>
    </footer>
   
    );
};

export default Pie;