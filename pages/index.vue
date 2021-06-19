<template>
  <div>
    <section class="text-black">
      <div class="max-w-6xl mx-auto px-5 py-24 ">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
            In Laymans Terms
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            A quick reference for understanding buzz-words, and learning more about them.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div v-for="article of articles" :key="article.slug" class="xl:w-1/3 md:w-1/2 p-4">
            <article-listing :article="article"></article-listing>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    async asyncData ({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author', 'categories'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>
