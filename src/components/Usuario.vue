<template>
  <div>
    <form class="formulario">
      <label for="nome">Nome:</label><br />
      <input type="text" id="nome" name="nome" v-model="nome" /><br />
      <label for="dataNascimento">Data Nascimento:</label><br />
      <input
        type="number"
        id="dataNascimento"
        name="dataNascimento"
        v-model="dataNascimento"
      /><br />
    </form>
  </div>
  <button class="botao" v-on:click="calcularIdade">Calcular Idade</button>
  <p style="text-align: center">
    {{ nome }} nasceu em {{ dataNascimento }} e tem {{ idade }} anos
  </p>
</template>

<!-- Propriedade Reativa:
    basear na capacidade da variável avisar quando mudar
    causando uma cadeia de reações.-->
<script setup>
import { ref } from "vue";
const nome = ref("Camilly");
const dataNascimento = ref(0);
const idade = ref(20);
//console.log(idade.value);
//import { reactive } from "vue";
//const pessoa = reactive({
//  nome: "",
//  dataNascimento: 0,
//  idade: 0,
//});

// #ESTUDANDO SOBRE MÉTODOS -----------
function calcularIdade() {
  idade.value = 2024 - dataNascimento.value;
}
</script>

<style scoped>
.formulario {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: aquamarine;
}
.botao {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background: aquamarine;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
}

.botao:hover {
  background: rgb(102, 147, 147);
}
</style>
