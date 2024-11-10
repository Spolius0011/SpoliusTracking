document.getElementById('tracking-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que la página se recargue
  
    const trackingNumber = document.getElementById('tracking-number').value;
    const resultMessage = document.getElementById('result-message');
    const trackingResult = document.getElementById('tracking-result');
  
    // Personaliza los números de seguimiento y sus estados aquí
    const estados = {
      "136534CO": "En tránsito - Tu paquete a sido devuelto por aduana  IBAGUE(COLOMBIA) - ARIZONA(ESTADOS UNIDOS).",
      "356842CO": "En tránsito - Tu paquete a sido devuelto por aduana  PEREIRA(COLOMBIA) - ARIZONA(ESTADOS UNIDOS).",
      "375856CO": "En tránsito - Tu paquete a sido devuelto por aduana  PASTO(COLOMBIA) - ARIZONA(ESTADOS UNIDOS).",
      "SP001": "En espera - El paquete está en aduana para verificación.",
    };
  
    // Verifica si el número ingresado existe en el objeto estados
    if (estados[trackingNumber]) {
      resultMessage.textContent = estados[trackingNumber];
    } else {
      resultMessage.textContent = "Número de seguimiento no encontrado.";
    }
  
    // Muestra el resultado
    trackingResult.classList.remove('hidden');
  });
  
