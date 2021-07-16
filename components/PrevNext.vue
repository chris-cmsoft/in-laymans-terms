<template>
  <div class="flex items-stretch gap-4">
    <article-listing v-if="prev" class="flex items-start w-1/2" :article="prev" />
    <article-listing v-if="next" class="flex items-start w-1/2" :article="next" />
  </div>
</template>

<script>
  export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
