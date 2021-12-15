var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});
rl.on("line", (entrada) => {
  entrada = entrada.split(" ");
  var resposta;

  // contém o boolean de cada palavra
  var repeticao = [];

  // contem em que o valor em que foi encontrada a repetição
  // 1, 2 ou 3
  var valor_rep = [];

  entrada.forEach((element, index) => {
    // vou adicionar um false no array de repetição para cada palavra encontrada no array
    repeticao.push(false);

    // para cada palavra, verificar se existe repetição dentro dela, caso sim, mudar a boolean no array repetição
    for (let i = 1; i <= 3; i++) {
      // sub string 1 é o inicio da variavel
      var sub1 = element.substr(0, i).toLowerCase();
      // sub string 2 é o trecho logo em seguida da sub string 1 (a suposta repetição)
      var sub2 = element.substr(i, i).toLowerCase();

      if (sub1 == sub2) {
        valor_rep[index] = i;
        repeticao[index] = true;
      }
    }
  });

  // caso todos os itens tenham uma repetição, então retirar do inicio de cada palavra, o valor salvo em valor_rep referente a palavra.
  if (!repeticao.includes(false)) {
    entrada.forEach((element, index) => {
      entrada[index] = element.substr(valor_rep[index]);
    });
  }
  resposta = entrada.join(" ");
  // capitalizar a primeira letra da resposta
  resposta = resposta[0].toUpperCase() + resposta.slice(1);

  console.log(resposta);
});
