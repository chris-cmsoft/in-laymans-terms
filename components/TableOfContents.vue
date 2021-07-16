<script>
  export default {
    props: {
      toc: {
        type: String,
        required: true
      },
      activeToc: {
        type: String,
        required: true
      }
    },
    async asyncData ({ $content, params }) {
      const article = await $content('articles', params.slug)
        .fetch()

      return {
        article
      }
    },
    methods: {
      tableOfContentsHeadingClick (toc) {
        this.$emit('updateActiveToc', toc.id)
      }
    }
  }
</script>

<template>
  <div class="sticky top-0 table-of-contents bg-gray-100 border-l-4 border-gray-400">
    <ul class="py-2">
      <li
        v-for="tocItem of toc"
        :key="tocItem.id"
        class="text-gray-600 hover:text-gray-900 hover:bg-gray-200"
        :class="{
          'toc2 font-light': tocItem.depth === 2,
          'toc3 font-extralight': tocItem.depth === 3,
          'bg-gray-200': tocItem.id === activeToc
        }"
        @click.prevent="tableOfContentsHeadingClick(tocItem)"
      >
        <NuxtLink class="block" :to="`#${tocItem.id}`">
          {{ tocItem.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.table-of-contents {
  .toc2 {
    @apply px-4
  }
  .toc3 {
    @apply pl-8 pr-4
  }
}
</style>
