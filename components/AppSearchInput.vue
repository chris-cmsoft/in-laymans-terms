<script>
  export default {
    data () {
      return {
        searchQuery: '',
        articles: [],
        shouldShowSearchResults: false
      }
    },
    watch: {
      async searchQuery (searchQuery) {
        if (!searchQuery) {
          this.articles = []
          this.hideSearchResults()
          return
        }
        this.showSearchResults()
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    },
    methods: {
      clearSearchQuery () {
        this.searchQuery = ''
      },
      hideSearchResults () {
        this.shouldShowSearchResults = false
      },
      showSearchResults () {
        this.shouldShowSearchResults = true
      },
      selectResult (slug) {
        this.hideSearchResults()
        this.clearSearchQuery()
        this.$router.push({
          name: 'blog-slug',
          params: {
            slug
          }
        })
      },
      blurSearchBox () {
        setTimeout(() => {
          this.hideSearchResults()
        }, 100)
      }
    }
  }
</script>

<template>
  <div class="w-48 relative">
    <input
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
      class="py-2 px-4 focus:outline-none text-gray-700 w-full rounded-sm"
      @blur="blurSearchBox"
    >
    <ul
      v-if="articles.length"
      class="search-results absolute w-full shadow bg-white text-gray-700"
      :class="{'hidden': !shouldShowSearchResults}"
    >
      <li
        v-for="article of articles"
        :key="article.slug"
        class="py-1 px-2 hover:bg-gray-100"
        @click="selectResult(article.slug)"
      >
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>
