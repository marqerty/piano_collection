<script setup>
import Header from '../components/Header.vue'
import PieceCard from '../components/PieceCard.vue'
const pieces = [
  {
    id: 1,
    title: 'Ноктюрн №2',
    composer: 'Frédéric Chopin',
    difficulty: 5,
    status: 'В процессе'
  },
  {
    id: 2,
    title: 'Лунная соната',
    composer: 'Ludwig van Beethoven',
    difficulty: 4,
    status: 'Выучено'
  },
  {
    id: 3,
    title: 'К Элизе',
    composer: 'Ludwig van Beethoven',
    difficulty: 3,
    status: 'Не начато'
  }
]
</script>

<template>
  <Header />
  <v-main>
    <v-container>
      <h1>Мои произведения</h1>
      
      <!-- поисковая строка -->
      <v-text-field
      label="Поиск произведения"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      />

      <!-- фильтры -->
       <v-row>
        <v-col cols="12" md="3">
          <v-select
            label="Композитор"
            :items="composers"
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            label="Жанр"
            :items="genres"
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            label="Статус"
            :items="statuses"
            variant="outlined"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            label="Сложность"
            :items="difficulties"
            variant="outlined"
          />
        </v-col>
      </v-row>
      
      <!-- карточки с произведениями -->
      <v-row>
        <v-col
          v-for="piece in pieces"
          :key="piece.id"
          cols="12"
          md="6"
          lg="4"
        >
          <PieceCard :piece="piece" />
        </v-col>
      </v-row>
    </v-container>
    
    <!-- кнопка добавления нового произведения -->
    <v-btn
    icon="mdi-plus"
    color="primary"
    size="large"
    position="fixed"
    location="bottom center"
    style="bottom: 40px;"
    />
  </v-main>
</template>