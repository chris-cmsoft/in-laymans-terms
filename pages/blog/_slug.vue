<script>
  export default {
    filters: {
      trim (value) {
        if (!value) {
          return ''
        }
        return value.trim()
      }
    },
    async asyncData ({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      const author = await $content('authors').where({ slug: article.author.slug }).fetch()

      const [prev, next] = await $content('articles')
        .only(['title', 'description', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

      return {
        article,
        author,
        prev,
        next
      }
    },
    data () {
      return {
        currentlyActiveToc: '',
        observer: null,
        observerOptions: {
          root: this.$refs.nuxtContent,
          threshold: 0
        }
      }
    },
    mounted () {
      this.$gtag.pageview({
        page_path: this.$route.fullPath,
        page_title: this.$route.params.slug
      })
      this.$gtag.screenview({
        app_name: 'In Laymans Terms',
        screen_name: `Blog Page - ${this.$route.params.slug}`
      })
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id')
          if (entry.isIntersecting) {
            this.currentlyActiveToc = id
          }
        })
      }, this.observerOptions)

      // Track all sections that have an `id` applied
      document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
        this.observer.observe(section)
      })
    },
    beforeDestroy () {
      this.observer.disconnect()
    },
    methods: {
      formatDate (date) {
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        return new Date(date).toLocaleDateString('en', options)
      },
      updateActiveToc (tocId) {
        this.currentlyActiveToc = tocId
      }
    }
  }
</script>

<template>
  <div class="flex pt-12">
    <aside class="w-1/4 px-6">
      <table-of-contents
        :active-toc="currentlyActiveToc"
        :toc="article.toc"
        @update-active-toc="updateActiveToc"
      />
    </aside>
    <article class="blog-content w-2/4 pt-12">
      <div class="">
        <div class="w-full mb-12">
          <h1 class="mb-4">
            {{ article.title }}
          </h1>
          <p class="w-full">
            {{ article.description }}
          </p>
          <!--        <div class="mt-2 leading-none w-full">-->
          <!--          <span v-for="category of article.categories" :key="category" class="mr-3 inline-flex items-center leading-none text-sm  py-1">-->
          <!--            <svg viewBox="0 0 512 512" class="fill-current w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg">-->
          <!--              <path d="M414.08,204.373L222.187,12.48C214.4,4.8,203.733,0,192,0H42.667C19.093,0,0,19.093,0,42.667V192    c0,11.84,4.8,22.507,12.587,30.187l192,192c7.68,7.68,18.347,12.48,30.08,12.48s22.507-4.8,30.187-12.48l149.333-149.333    c7.68-7.787,12.48-18.453,12.48-30.187C426.667,222.827,421.867,212.16,414.08,204.373z M74.667,106.667    c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S92.373,106.667,74.667,106.667z" />-->
          <!--            </svg>-->
          <!--            {{ category }}-->
          <!--          </span>-->
          <!--        </div>-->
        </div>
        <div class="w-full">
          <nuxt-content :document="article"/>
        </div>
        <hr>
        <h2 class="mb-8 mt-8">
          Author
        </h2>
        <div class="w-full">
          <author :author="author"/>
        </div>
        <hr>
        <div class="w-full mb-12 mt-12">
          <prev-next :prev="prev" :next="next"/>
        </div>
      </div>
    </article>
  </div>
</template>
