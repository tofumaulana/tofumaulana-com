<template>
  <div class="grid grid-cols-2">
    <div class="bg-white h[33rem]">
      <h1 class="text-center font-bold text-2xl pt-[10rem]">project</h1>
      <p class="text-center p-10">"Kemampuan manajemen proyek saya memungkinkan saya untuk mengelola berbagai tugas dengan efisien dan mencapai tujuan proyek tepat waktu."</p>
    </div>
    <div class="bg-[#FFF6E3] h-[33rem] shadow-2xl">
      <div class="">
        <ul>
          <li v-for="user in users" class="text-xl font-semibold p-8">
            <RouterLink :to="'/user/' + user.params1 + '/telkomsat'">
              <span class="text-2xl font-bold">{{ user.no1 }}</span> {{ user.name1 }} <br />
              <span class="text-center">{{ user.project }}</span>
            </RouterLink>
            <br />
            <RouterLink :to="'/user/' + user.params + '/project'"
              ><span class="text-2xl font-bold">{{ user.no }}</span> {{ user.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { no1: '01', params1: 'Telkomsat', name1: 'Telkomsat', project: 'membuat web telkomsat menggunakan Vue Js dan Tailwind Css' },
        { no: '02', params: 'ben', name: 'Project' },
        { no: '03', params: 'greg', name: 'Projet' },
      ],
    };
  },
};
</script>
