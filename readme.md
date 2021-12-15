# Mini-Teste de Programação de Backend

Aconteceu algum problema em nosso servidor e algumas palavras do banco de dados
ficaram com o início duplicado.

Sua tarefa é remover duplicação do início de cada palavra de um texto, mas somente se
todas as palavras do texto tiverem duplicação.

A linguagem deve ser uma das que fornecemos nos templates da segunda página.

## Entrada

A entrada é composta por um único caso teste contendo um texto de uma única linha com
pelo menos uma palavra, sem caracteres especiais e sem acentuação. Todas as palavras
estão separadas por apenas um único caractere de espaço. A entrada deve ser lida pela
entrada padrão.

## Saída

Deve-se imprimir o novo texto sem duplicação (considere a maior duplicação da palavra) do início de cada palavra. A primeira letra do texto resultante deve ser maiúscula, todas as outras devem ser minúsculas.

Exemplos:

| Entrada                                              | Saída                              |
| ---------------------------------------------------- | ---------------------------------- |
| oo rarato roeroeu aa rouroupa dodo rerei dde romroma | O rato roeu a roupa do rei de roma |
| bebe                                                 | Be                                 |
| Barbara bebe com Bernardo                            | Barbara bebe com bernardo          |

## Templates

### C

```c
#include <stdio.h>
int main() {
  char entrada[1000];
  scanf("%s", entrada);

  // Escreva a sua solução aqui

  printf("%s", reposta);
  return 0;
}
```

### C++

```c++
#include <iostream>
using namespace std;
int main() {
  string entrada;
  cin >> entrada;

  // Escreva a sua solução aqui

  cout << resposta << endl;
  return 0;
}
```

### Java

```java
import java.io.IOException;
import java.util.Scanner;
public class Main {
  public static void main(String[] args) throws
    IOException { Scanner scanner = new Scanner(System.in);
    String entrada = scanner.nextLine();

    // Escreva a sua solução aqui

    System.out.println(resposta);
    scanner.close();
  }
}
```

### Go

```go
package main

import (
  "bufio"
  "fmt"
  "os"
)

func main() {
  scanner := bufio.NewScanner(os.Stdin)
  scanner.Scan()
  text := scanner.Text()

  // Escreva a sua solução aqui

  fmt.Println(resposta)
}
```

### Python

```python
import sys

entrada = str(raw_input())

# Escreva a sua solução aqui

print(resposta)
```

### JavaScript / NodeJS

```js
var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (entrada) => {
  // Escreva a sua solução aqui

  console.log(resposta);
});
```
