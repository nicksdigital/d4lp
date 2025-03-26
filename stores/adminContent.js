import { defineStore } from 'pinia'

export const useAdminContentStore = defineStore('adminContent', {
  state: () => ({
    pages: {},
    editingPage: null,
    isLoading: false,
    error: null
  }),
  
  actions: {
    async updatePageContent(pageId, content) {
      this.isLoading = true
      try {
        // Here you would make an API call to update the content
        await $fetch(`/api/admin/pages/${pageId}`, {
          method: 'PUT',
          body: { content }
        })
        this.pages[pageId] = content
      } catch (err) {
        this.error = err.message
      } finally {
        this.isLoading = false
      }
    },

    setEditingPage(pageData) {
      this.editingPage = pageData
    }
  }
})