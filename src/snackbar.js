import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {

  state: () => (
    {
      visible: false,
      text: null,
      timeout: 4000,
      multiline: false,
      type: 'default',
      icon: false
    }
  ),
  actions: {
    showSnackbar (payload) {
      this.type = payload.type
      this.text = payload.text
      this.icon = payload.icon
      this.multiline = (payload.text.length > 50)
      if (payload.multiline) {
        this.multiline = payload.multiline
      }
      if (payload.timeout) {
        this.timeout = payload.timeout
      }
      this.visible = true
    },
    closeSnackbar () {
      this.visible = false
      this.multiline = false
      this.timeout = 6000
      this.text = null
      this.icon = false
    }
  }
})
