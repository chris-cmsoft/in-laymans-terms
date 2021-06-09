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
        <h1 class="mb-2 text-4xl leading-10 text-left sm:text-5xl sm:leading-none md:text-6xl">
          {{ article.title }}
        </h1>
        <p class="lg:w-1/2 w-full leading-relaxed text-base">
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
      <div class="w-full mb-20">
        <nuxt-content :document="article" />
      </div>
      <div class="w-full mb-20">
        <!--<p>Article last updated: {{ formatDate(article.updatedAt) }}</p>-->
        <author :author="article.author" />
      </div>
      <div class="w-full mb-20">
        <prev-next :prev="prev" :next="next" />
      </div>
    </div>
  </article>
</template>

<style>
  .nuxt-content p {
    @apply my-4 text-lg font-light
  }
  .nuxt-content h1 {
    @apply text-7xl mb-8
  }
  .nuxt-content h2 {
    @apply text-5xl mb-8
  }
  .nuxt-content h3 {
    @apply text-3xl mb-8
  }
  .nuxt-content hr {
    @apply mb-6 mt-10
  }
  code,
  pre[class*="language-"] {
    color: #c5c8c6;
    text-shadow: 0 1px rgba(0, 0, 0, 0.3);
    font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
  }

  :not(pre) > code,
  pre[class*="language-"] {
    background: #1d1f21;
  }

  /* Inline code */
  :not(pre) > code {
    @apply px-2 py-1 rounded
    /*border-radius: .3em;*/
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #7C7C7C;
  }

  .token.punctuation {
    color: #c5c8c6;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.keyword,
  .token.tag {
    color: #96CBFE;
  }

  .token.class-name {
    color: #FFFFB6;
    text-decoration: underline;
  }

  .token.boolean,
  .token.constant {
    color: #99CC99;
  }

  .token.symbol,
  .token.deleted {
    color: #f92672;
  }

  .token.number {
    color: #FF73FD;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #A8FF60;
  }

  .token.variable {
    color: #C6C5FE;
  }

  .token.operator {
    color: #EDEDED;
  }

  .token.entity {
    color: #FFFFB6;
    cursor: help;
  }

  .token.url {
    color: #96CBFE;
  }

  .language-css .token.string,
  .style .token.string {
    color: #87C38A;
  }

  .token.atrule,
  .token.attr-value {
    color: #F9EE98;
  }

  .token.function {
    color: #DAD085;
  }

  .token.regex {
    color: #E9C062;
  }

  .token.important {
    color: #fd971f;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
</style>
