
 <template>
  <div>
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
      <ScrollToTop />
    </NuxtLayout>
  </div>
</template>


<script setup>
import { useSmoothScroll } from "~/composables/useSmoothScroll";

useSmoothScroll();
</script>
