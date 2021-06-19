<script>
  export default {
    async asyncData ({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .where({
          'author.slug': {
            $regex: [params.author, 'i']
          }
        })
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch()

      const author = await $content('authors').where({ slug: params.author }).fetch()

      return {
        articles,
        author
      }
    },
    methods: {
      formatDate (date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>

<template>
  <div>
    <div class="max-w-6xl mx-auto px-5 py-24 ">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <div class="w-36 mb-8">
          <img :src="author.avatarUrl" class="rounded-full shadow-inner"/>
        </div>
        <h1 class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
          {{ author.name }}
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          {{ author.bio }}
        </p>
      </div>
      <div class="flex flex-wrap justify-center -m-4">
        <div v-for="article of articles" :key="article.slug" class="xl:w-1/3 md:w-1/2 p-4">
          <article-listing :article="article"></article-listing>
        </div>
      </div>
    </div>
<!--    <p>Bio: {{ articles[0].author.bio }}</p>-->
<!--    <h3>Here are a list of articles by {{ articles[0].author.name }}:</h3>-->
<!--    <ul>-->
<!--      <li v-for="article in articles" :key="article.slug">-->
<!--        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">-->
<!--          <img :src="article.img" :alt="article.alt">-->
<!--          <div>-->
<!--            <h2>{{ article.title }}</h2>-->
<!--            <p>{{ article.description }}</p>-->
<!--            <p>{{ formatDate(article.updatedAt) }}</p>-->
<!--          </div>-->
<!--        </NuxtLink>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>
