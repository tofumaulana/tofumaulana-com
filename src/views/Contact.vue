<template>
  <form class="">
    <div class="max-w-sm mx-auto mt-16">
      <div class="py-3">
        <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
        <input
          type="text"
          id="text"
          class="shadow-sm bg-[#FFF6E3] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="Nama Lengkap"
          required
        />
      </div>
      <div class="py-3">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          class="shadow-sm bg-[#FFF6E3] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
          v-model="email"
        />
        <label for="email" class="text-red-600 font-normal text-sm" v-if="emailError">minimal email 12 karakter</label>
      </div>
      <div class="py-3">
        <textarea
          id="about"
          name="about"
          rows="3"
          placeholder="message"
          class="block w-full bg-[#FFF6E3] p-2.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          v-model="about"
        ></textarea>
        <label for="email" class="text-red-600 font-normal text-sm" v-if="aboutError">minimal 10 karakter</label>
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Kirim
      </button>
    </div>
  </form>
  <br />
  <br />
  <br />
</template>

<script>
export default {
  data() {
    return {
      email: '',
      about: '',
      emailError: false,
      aboutError: false,
    };
  },
  watch: {
    email(value) {
      if (value.length < 12) {
        this.emailError = true;
      } else {
        this.emailError = false;
      }
    },
    about(value) {
      if (value.length < 10) {
        this.aboutError = true;
      } else {
        this.aboutError = false;
      }
    },
  },
};
</script>
