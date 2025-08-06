let contador = 1;

function chamarSenha() {
  const nomesPacientes = ["João da Silva", "Ana Souza", "Carlos Lima", "Mariana Costa"];
  const nomesMedicos = ["Dr. Rafael Antonio Alves", "Dr. Rafael Antonio Alves", "Dra. Paula Freitas"];
  const salas = [1, 2, 3, 4, 5];

  const senha = "A" + contador.toString().padStart(3, "0");
  const paciente = nomesPacientes[Math.floor(Math.random() * nomesPacientes.length)];
  const medico = nomesMedicos[Math.floor(Math.random() * nomesMedicos.length)];
  const sala = salas[Math.floor(Math.random() * salas.length)];

  // Atualiza painel principal
  document.getElementById("senha").textContent = senha;
  document.getElementById("paciente").textContent = paciente;
  document.getElementById("medico").textContent = medico;
  document.getElementById("sala").textContent = sala;

  // Adiciona ao histórico
  const lista = document.getElementById("listaHistorico");
  const item = document.createElement("li");
  item.textContent = `Senha ${senha} - ${paciente} (${medico}) - Sala ${sala}`;
  lista.prepend(item);

  // Toca som
  const audio = document.getElementById("somChamada");
  audio.play().catch((err) => {
    console.warn("Erro ao tocar som:", err);
  });

  // Fala
  const frase = `Senha ${senha}, paciente ${paciente}, com ${medico}, na sala ${sala}`;
  const utterance = new SpeechSynthesisUtterance(frase);
  utterance.lang = "pt-BR";
  speechSynthesis.speak(utterance);

  contador++;
}
