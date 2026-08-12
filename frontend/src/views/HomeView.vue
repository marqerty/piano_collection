<script setup>
import { ref, onMounted, computed } from 'vue'

import Header from '../components/Header.vue'
import PieceCard from '../components/PieceCard.vue'

const pieces = ref([])
const search = ref('')

const composers = [
  'Frédéric Chopin',
  'Ludwig van Beethoven'
]

const genres = [
  'Ноктюрн',
  'Соната',
  'Пьеса'
]

const statuses = [
  'Не начато',
  'В процессе',
  'Выучено'
]

const difficulties = [1, 2, 3, 4, 5]

onMounted(async () => {
  const response = await fetch('/api/pieces')
  pieces.value = await response.json()
})

const filteredPieces = computed(() => {
  return pieces.value.filter(piece =>
    piece.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <Header />
  <v-main>
    <v-container>
      <h1>Мои произведения</h1>
      
      <!-- статистика -->
      <!-- <v-row class="mb-4">
        <v-col cols="12" sm="4">
          <v-card color="green-lighten-5">
            <v-card-text>

              <div class="text-medium-emphasis">
                Всего произведений
              </div>
              <div class="text-h4">
                {{ pieces.length }}
              </div>

            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card color="green-lighten-5">
            <v-card-text>

              <div class="text-medium-emphasis">
                Выучено
              </div>
              <div class="text-h4">
                {{ pieces.filter(piece => piece.status === 'Выучено').length }}
              </div>
              
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card color="green-lighten-5">
            <v-card-text>
              
              <div class="text-medium-emphasis">
                В процессе
              </div>
              <div class="text-h4">
                {{ pieces.filter(piece => piece.status === 'В процессе').length }}
              </div>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row> -->

      <!-- поисковая строка -->
      <v-text-field
      v-model="search"
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
          v-for="piece in filteredPieces"
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
<style scoped>
</style>