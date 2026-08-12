<script setup>
import Header from '../components/Header.vue'
import PieceCard from '../components/PieceCard.vue'
const piece = {
  title: 'Ноктюрн №2',
  composer: 'Frédéric Chopin',
  difficulty: 5,
  status: 'В процессе'
}
</script>

<template>
  <Header />
    <v-main>
      <v-container>
        <PieceCard :piece="piece" />
      </v-container>
    </v-main>
</template>