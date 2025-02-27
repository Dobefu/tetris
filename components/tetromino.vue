<script setup lang="ts">
import type { TetrominoType } from '~/types/tetromino-type'

withDefaults(
  defineProps<{
    position?: Vector3
    type: TetrominoType
  }>(),
  { position: [0, 0, 0] },
)
</script>

<template>
  <TetrominoBlock :position="position" :type="type" />
</template>
