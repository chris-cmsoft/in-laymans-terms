<script>
  export default {
    async asyncData ({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        prev,
        next
      }
    },
    methods: {
      formatDate (date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }
    }
  }
</script>

<template>
  <article>
    <div class="max-w-6xl mx-auto px-5 py-24">
      <div class="w-full mb-16">
        <h1 class="title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">
          {{ article.title }}
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
          {{ article.description }}
        </p>
        <div class="mt-2 leading-none w-full">
          <span v-for="category of article.categories" :key="category" class="mr-3 inline-flex items-center leading-none text-sm  py-1">
            <svg viewBox="0 0 512 512" class="fill-current w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg">
              <path d="M414.08,204.373L222.187,12.48C214.4,4.8,203.733,0,192,0H42.667C19.093,0,0,19.093,0,42.667V192    c0,11.84,4.8,22.507,12.587,30.187l192,192c7.68,7.68,18.347,12.48,30.08,12.48s22.507-4.8,30.187-12.48l149.333-149.333    c7.68-7.787,12.48-18.453,12.48-30.187C426.667,222.827,421.867,212.16,414.08,204.373z M74.667,106.667    c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S92.373,106.667,74.667,106.667z" />
            </svg>
            {{ category }}
          </span>
        </div>
      </div>
      <div class="w-full mb-20">
        <nuxt-content :document="article" />
      </div>
      <div class="w-full mb-20">
        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
        <author :author="article.author" />
      </div>
      <div class="w-full mb-20">
        <prev-next :prev="prev" :next="next" />
      </div>
    </div>
  </article>
</template>
