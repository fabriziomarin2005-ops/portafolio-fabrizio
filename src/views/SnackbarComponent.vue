<template>
    <v-snackbar
        location="top"
        v-model="snackbarStore.visible"
        :timeout="snackbarStore.timeout"
        :color="snackbarStore.type"
        :multi-line="snackbarStore.multiline === true">
        <v-icon v-if="snackbarStore.icon" left>{{ snackbarStore.icon }}</v-icon>
        {{ snackbarStore.text }}
        <template v-slot:actions>
            <v-btn
                variant="text"
                icon="clear"
                @click="snackbarStore.visible = false"
            />
        </template>
    </v-snackbar>

</template>

<script>
import { useSnackbarStore } from '@/stores/snackbar'
import { mapActions, mapStores } from 'pinia'

export default {
  computed: {
    ...mapStores(useSnackbarStore)
  },
  methods: {
    ...mapActions(useSnackbarStore, ['closeSnackbar'])
  }
}
</script>

<style scoped>

</style>
