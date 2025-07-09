
function sortear() {
  const input = document.getElementById("input-ids").value;
  const qtd = parseInt(document.getElementById("quantidade").value);
  const resultadoDiv = document.getElementById("resultado");
  const roletaDiv = document.getElementById("roleta");
  const som = document.getElementById("som-vitoria");

  let ids = input.split(",").map(id => id.trim()).filter(id => id !== "");

  if (ids.length === 0 || isNaN(qtd) || qtd <= 0) {
    resultadoDiv.innerHTML = "Preencha os campos corretamente!";
    return;
  }

  if (qtd > ids.length) {
    resultadoDiv.innerHTML = "Quantidade maior que o número de IDs!";
    return;
  }

  const sorteados = [];

  function embaralhar(callback) {
    let i = 0;
    const embaralhamento = setInterval(() => {
      const idAleatorio = ids[Math.floor(Math.random() * ids.length)];
      roletaDiv.innerHTML = idAleatorio;
      i++;
      if (i > 20) {
        clearInterval(embaralhamento);
        callback();
      }
    }, 100);
  }

  function sortearUnico(callback) {
    embaralhar(() => {
      const idx = Math.floor(Math.random() * ids.length);
      const sorteado = ids.splice(idx, 1)[0];
      sorteados.push(sorteado);
      roletaDiv.innerHTML = sorteado;
      som.play();
      if (sorteados.length < qtd) {
        setTimeout(() => sortearUnico(callback), 1000);
      } else {
        callback();
      }
    });
  }

  let contagem = 3;
  roletaDiv.innerHTML = "Sorteando em " + contagem + "...";
  const intervalo = setInterval(() => {
    contagem--;
    if (contagem > 0) {
      roletaDiv.innerHTML = "Sorteando em " + contagem + "...";
    } else {
		
      clearInterval(intervalo);
      roletaDiv.innerHTML = "Sorteando...";
      sortearUnico(() => {
        resultadoDiv.innerHTML = "🎉 Sorteado(s): " + sorteados.join(", ");
      });
    }
  }, 1000);
}
