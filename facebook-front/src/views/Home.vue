<template>
  <div class="mt-10 p-10">
    <div
      class="rounded border-gray-600 border-2 my-2 p-1"
      v-for="post in posts"
    >
      <h1
        class="mb-1 text-xl font-extrabold leading-tight text-gray-900 lg:mb-2 lg:text-2xl dark:text-white"
      >
        {{ post.title }}
      </h1>
      <h1
        class="mb-4 italic text-sm text-gray-900 lg:mb-6 lg:text-md dark:text-white"
      >
        {{ post.publication_date }}
      </h1>
      <h1 class="mb-4 text-md text-gray-900 lg:mb-6 lg:text-lg dark:text-white">
        {{ post.content }}
      </h1>
      <div
        class="bg-gray-400 rounded my-2 text-sm text-gray-900 lg:mb-6 lg:text-base dark:text-white"
        v-for="comment in comments"
      >
        <h1 class="p-1 lg:p-2" v-if="comment.postId === post.id">
          Comment : {{ comment.content }}
        </h1>
      </div>
      <form @submit.prevent="postComment">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >Search</label
        >
        <div class="relative">
          <input
            type="text"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your comment..."
            required
          />
          <button
            type="submit"
            disabled
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            POST
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import API from "../services/api";

export default {
  data: () => ({
    posts: [],
    comments: [],
    formInput: {
      content: null,
    },
  }),
  created() {
    this.initDatas();
  },
  methods: {
    initDatas() {
      this.onInit = true;
      let posts = API.getPosts().then((response) => {
        this.posts = response.data;
      });
      let comments = API.getComments().then((response) => {
        this.comments = response.data;
      });
      Promise.all([posts, comments])
        .then()
        .finally((this.onInit = false));
    },
    postComment() {
      this.$store.dispatch("validQuery", {
        content: this.content,
      });
    },
  },
};
</script>
