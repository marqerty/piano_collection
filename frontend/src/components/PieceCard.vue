<script setup>
defineProps({
  piece: Object
})
const statusNames = {
  not_started: 'Не начато',
  in_progress: 'В процессе',
  learned: 'Выучено'
}
</script>

<template>
  <v-card>
    <v-card-title>
      {{ piece.title }}

      <v-btn
        icon="mdi-pencil"
        variant="text"
        size="small"
      />
    </v-card-title>

    <v-card-text>
      <div>{{ piece.composer }}</div>

      <div>
        Сложность:
        <v-rating
          :model-value="piece.difficulty"
          readonly
          density="compact"
        />
      </div>

      <v-chip>
        {{ statusNames[piece.status] }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>