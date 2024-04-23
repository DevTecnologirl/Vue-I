<!-- iNTRODUÇÃO AO COMPONENTE -->
<script setup>
import project from "./components/project.vue";
import Usuario from "./components/Usuario.vue";
</script>

<!-- CAMADA DE VISUALIZAÇÃO-->
<template>
  <Navmenu>Teste</Navmenu>
  <!-- <component is="Navmenu"></component> -->
  <header>
    <project>
      <project></project>
    </project>
  </header>

  <main>
    <Usuario></Usuario>
  </main>
</template>

<!-- STYLES COM CSS-->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
header {
  line-height: 1.5;
}
</style>
