const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const btnSomar = document.getElementById("btnSomar") as HTMLInputElement;
const btnSubtrair = document.getElementById("btnSubtrair") as HTMLInputElement;

type Operacoes = "SOMAR" | "SUBTRAIR"

interface Valores {
   tipo: Operacoes
   a: number;
   b: number;
}

function operacao({ tipo, a, b }: Valores): number {
   if(tipo === "SOMAR"){
      return a + b;
   }
   else{
      return a-b
   }
}


btnSomar.addEventListener("click", function () {
   const resultado = operacao({
      tipo:"SOMAR",
      a: Number(input1.value),
      b: Number(input2.value),
   });
   console.log(resultado);
});

btnSubtrair.addEventListener("click", function () {
   const resultado = operacao({
      tipo:"SUBTRAIR",
      a: Number(input1.value),
      b: Number(input2.value),
   });
   console.log(resultado);
});
