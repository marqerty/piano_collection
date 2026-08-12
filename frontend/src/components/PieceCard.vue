<script setup>
defineProps({
  piece: Object
})
</script>

<template>
  <v-card>
    <v-card-title>
      {{ piece.title }}
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
        {{ piece.status }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>