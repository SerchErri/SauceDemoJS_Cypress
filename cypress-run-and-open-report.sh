#!/usr/bin/env bash
# Ejecuta el script npm y abre el reporte mochawesome generado
set -euo pipefail

echo "Ejecutando: npm run cy:chrome:headed"
npm run cy:chrome:headed

echo "Búsqueda del informe generado..."
# Preferir el HTML generado en `cypress/reports` según la configuración del reporter
REPORT=""
if [ -f "./cypress/reports/mochawesome.html" ]; then
  REPORT="./cypress/reports/mochawesome.html"
elif [ -f "./cypress/reports/mochawesome-report.html" ]; then
  REPORT="./cypress/reports/mochawesome-report.html"
else
  REPORT=$(find ./cypress/reports -maxdepth 1 -type f -iname "*.html" 2>/dev/null | head -n 1 || true)
fi

if [ -z "$REPORT" ]; then
  # fallback: buscar cualquier HTML en el repo
  REPORT=$(find . -type f -iname "*mochawesome*.html" 2>/dev/null | head -n 1 || true)
fi

if [ -z "$REPORT" ]; then
  # fallback final: cualquier HTML reciente
  REPORT=$(find . -type f -iname "*.html" 2>/dev/null | sort -r | head -n 1 || true)
fi

if [ -z "$REPORT" ]; then
  echo "No se encontró ningún archivo HTML de reporte. Busca en tu carpeta de reportes."
  exit 1
fi

echo "Abriendo informe: $REPORT"

OS=$(uname -s || true)
case "$OS" in
  MINGW*|CYGWIN*|MSYS*)
    # En Git Bash / MSYS en Windows
    if command -v cygpath >/dev/null 2>&1; then
      WINPATH=$(cygpath -w "$REPORT")
      cmd.exe /c start "" "$WINPATH"
    else
      # fallback a powershell
      powershell.exe -NoProfile -Command Start-Process -FilePath "$REPORT"
    fi
    ;;
  Darwin)
    open "$REPORT"
    ;;
  *)
    # Linux
    xdg-open "$REPORT" || echo "No se pudo abrir automáticamente. Ruta del reporte: $REPORT"
    ;;
esac

exit 0
