<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useAdminContentStore } from '~/stores/adminContent'

// Add middleware
definePageMeta({
  middleware: ['admin'],
  requiresPermission: 'canUpdateContract'
})

const auth = useAuthStore()
const adminContentStore = useAdminContentStore()

// Rest of the component code remains the same...
</script>