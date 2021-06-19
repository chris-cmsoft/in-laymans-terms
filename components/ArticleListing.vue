<script>
  export default {
    props: ['article']
  }
</script>

<template>
  <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-75 items-start">
    <div>
      <h2 class="text-lg  font-medium title-font mb-2">
        {{ article.title }}
      </h2>
      <p class="leading-relaxed text-base">
        {{ article.description }}
      </p>
      <div class="mt-2 leading-none w-full" v-if="article.categories">
        <span v-for="category of article.categories" :key="category" class="mr-3 inline-flex items-center leading-none text-sm  py-1">
          <svg viewBox="0 0 512 512" class="fill-current w-5 h-5 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg">
            <path d="M414.08,204.373L222.187,12.48C214.4,4.8,203.733,0,192,0H42.667C19.093,0,0,19.093,0,42.667V192    c0,11.84,4.8,22.507,12.587,30.187l192,192c7.68,7.68,18.347,12.48,30.08,12.48s22.507-4.8,30.187-12.48l149.333-149.333    c7.68-7.787,12.48-18.453,12.48-30.187C426.667,222.827,421.867,212.16,414.08,204.373z M74.667,106.667    c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S92.373,106.667,74.667,106.667z" />
          </svg>
          {{ category }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>
