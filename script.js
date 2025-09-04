document.getElementById("riskForm").addEventListener("submit", function(e){
    e.preventDefault();

    const edad = parseInt(document.getElementById("edad").value);
    const sexo = document.getElementById("sexo").value;
    const colesterol = parseInt(document.getElementById("colesterol").value);
    const presion = parseInt(document.getElementById("presion").value);
    const diabetes = document.getElementById("diabetes").value;
    const fuma = document.getElementById("fuma").value;

    // Fórmula simple de riesgo (solo para prototipo)
    let riesgo = 0;

    riesgo += edad * 0.3;
    riesgo += colesterol * 0.2;
    riesgo += presion * 0.2;
    riesgo += (diabetes === "si") ? 10 : 0;
    riesgo += (fuma === "si") ? 10 : 0;
    riesgo += (sexo === "hombre") ? 5 : 0;

    // Clasificación
    let nivel = "";
    if(riesgo < 50) nivel = "Bajo";
    else if(riesgo < 100) nivel = "Medio";
    else nivel = "Alto";

    document.getElementById("resultado").innerHTML = `Tu riesgo estimado es: <strong>${nivel}</strong> (${Math.round(riesgo)} puntos)`;
});
