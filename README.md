# Sauce Demo — Pruebas E2E con Cypress

Proyecto de ejemplo para automatización end-to-end usando Cypress sobre la demo de Sauce Demo.

**Descripción**
- Suite de pruebas para login, navegación de productos y proceso de checkout.

**Requisitos**
- Node.js (recomendado >= 16)
- npm
- Navegadores instalados: Chrome, Firefox, Edge (para ejecutar pruebas por navegador)

**Instalación**
1. Clonar el repositorio:

```
git clone <repo-url>
cd Sauce_Demo
```

2. Instalar dependencias:

```
npm install
```

**Configuración**
- El archivo de configuración de Cypress está en `cypress.config.js`.
- Las variables de entorno (si necesita ajustarlas) están en `cypress.env.json`.

**Estructura del proyecto (resumen)**
- `cypress/e2e/` — archivos de pruebas (login, products, checkout).
- `cypress/fixtures/` — datos estáticos de prueba.
- `cypress/Pages/` — objetos/páginas reutilizables.
- `cypress/reports/` — reportes generados (reportes HTML en `cypress/reports/html/index.html`).
- `cypress/screenshots/` — capturas de fallos por spec.
- `cypress/support/` — comandos y configuración global.

**Scripts disponibles (npm)**
Los scripts definidos en `package.json` disponibles son:

```
npm run cy:chrome          # Ejecuta Cypress en Chrome
npm run cy:chrome:headed   # Ejecuta Cypress en Chrome (script con flag --headless según package.json)
npm run cy:firefox         # Ejecuta Cypress en Firefox
npm run cy:firefox:headed  # Ejecuta Cypress en Firefox en modo headed (según script)
npm run cy:edge            # Ejecuta Cypress en Edge
npm run cy:edge:headed     # Ejecuta Cypress en Edge en modo headed (según script)
npm run test:all           # Ejecuta chrome, firefox y edge en serie
npm run test:all:headed    # Ejecuta las variantes "headed" en serie
```

También puede abrir la interfaz interactiva de Cypress con:

```
npx cypress open
```

Y ejecutar una especificación concreta:

```
npx cypress run --spec "cypress/e2e/login/login.cy.js" --browser chrome
```

**Reportes y artefactos**
- Reporte HTML: `cypress/reports/html/index.html`.
- Capturas: `cypress/screenshots/`.

**Buenas prácticas / recomendaciones**
- Mantenga actualizadas las dependencias de Cypress.
- Use `cypress.env.json` para credenciales o parámetros sensibles (no subirlas al repositorio público).
- Para ver fallos reproducibles, use `npx cypress open` y ejecute la spec en modo interactivo.

**Contribuir**
- Abrir un issue o enviar un pull request con descripciones claras de los cambios y las pruebas realizadas.

**Licencia**
- Este proyecto no incluye una licencia explícita. Añada una licencia como `MIT` si desea permitir el uso público.

---

Si quieres, puedo:
- Ejecutar los tests localmente y subir un ejemplo de reporte.
- Añadir badges al README (build/test coverage).
