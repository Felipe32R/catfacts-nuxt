<template>
  <div
    class="flex flex-col min-h-screen h-screen overflow-y-scroll overflow-x-hidden pb-10 sm:pb-0 bg-pink-main"
  >
    <!-- PAGE HEADER -->
    <header
      class="text-pink-light font-semibold text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl w-full bg-blue-main py-10 flex items-center justify-center"
    >
      THE DEFSAFE CAT FACTS PAGE
    </header>

    <!-- MAIN CONTENT CONTAINER -->
    <div
      class="flex flex-col lg:flex-row gap-12 bg-pink-main w-full h-full items-start py-12 px-[5%] 2xl:px-[10%]"
    >
      <!-- FACT CONTAINER -->
      <div
        class="flex flex-col gap-12 items-start justify-center h-full w-full lg:w-1/2"
      >
        <h1 class="text-blue-main text-2xl font-semibold">CAT FACT:</h1>
        <span class="text-xl text-blue-light font-medium" v-if="isLoading"
          >Loading...</span
        >
        <span
          :key="currentFact"
          v-else
          class="text-blue-light text-lg font-medium animate-fade"
        >
          {{ currentFact }}
        </span>

        <button
          @click="getNextFact"
          class="bg-blue-light text-pink-light text-lg font-medium py-3 px-5 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:brightness-[90%] transition-all"
        >
          <RefreshIcon class="text-2xl mt-[2px]" />
          GET A RANDOM CAT FACT
        </button>
      </div>
      <!-- CATS IMAGES CONTAINER -->
      <div
        class="pb-10 lg:pb-0 flex flex-col sm:flex-row gap-10 py-10 items-center w-full lg:w-2/3 sm:h-full justify-center"
      >
        <!-- LEFT SIDE IMAGE -->
        <img
          :src="kitty1"
          alt="Cat1"
          class="rounded-3xl object-cover max-h-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[550px]"
        />
        <!-- RIGHT SIDE IMAGES CONTAINER -->
        <div
          class="flex flex-col gap-10 h-full sm:max-h-[350px] md:max-h-[450px] lg:max-h-[400px] xl:max-h-[500px] 2xl:max-h-[550px] sm:w-[200px] w-[250px]"
        >
          <img
            :src="kitty2"
            alt="Cat2"
            class="rounded-3xl object-cover h-full sm:h-[40%]"
          />
          <img
            :src="kitty3"
            alt="Cat3"
            class="rounded-3xl object-cover h-full sm:h-[60%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import kitty1 from "~/public/assets/images/kitty1.webp";
import kitty2 from "~/public/assets/images/kitty2.webp";
import kitty3 from "~/public/assets/images/kitty3.webp";
import RefreshIcon from "~/public/assets/images/refresh.svg";

const factStore = useFactStore();
const { currentFact } = storeToRefs(factStore);
const isLoading = ref(true);

// get a new cat fact
const getNextFact = () => {
  factStore.updateCurrentFact();
};

// handle isLoading value
watch(currentFact, (newValue) => {
  if (newValue) {
    isLoading.value = false;
  }
});

// call the api when component is mounted
onMounted(() => {
  factStore.fetchFacts();
});
</script>
