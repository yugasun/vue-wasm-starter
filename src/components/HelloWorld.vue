<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ElButton } from 'element-plus';
import init, { fibonacci, greet } from '@crate/greet/pkg';
import { useUserStore } from '@/store/user';

defineProps<{ msg: string }>();

init();

const { t } = useI18n();
const userStore = useUserStore();

const result = ref('0');
function complexCompute() {
  result.value = `${fibonacci(50)}`;
}
</script>

<template>
  <!-- use greet function defined in rust module -->
  <section class="wasm-demo border-dashed border-2 border-gray-700 flex flex-col justify-between items-center p-2">
    <div class="btns flex flex-col gap-2 justify-between items-center">
      <ElButton type="primary" @click="greet('vue-wasm-starter')">
        Greet Vue Wasm Starter
      </ElButton>
      <ElButton type="primary" @click="complexCompute">
        Run Complex Compute: Fibonacci(50)
      </ElButton>
    </div>
    <div class="p-2">
      Result: {{ result }}
    </div>
  </section>
  <h1 class="text-lg text-dark dark:text-light mt-2" v-html="msg ">
  </h1>
  <p v-if="userStore.isLogin" class="text-dark dark:text-light">
    {{
      t('common.welcome', {
        name: userStore.userInfo?.username,
      })
    }}
  </p>
  <p class="text-dark dark:text-light">
    {{ t('home.recommendIde') }}:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p class="text-dark dark:text-light" v-html="t('home.remarks')" />
</template>

<style scoped>
a {
  color: var(--link-color);
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  padding: 2px 4px;
  border-radius: 4px;
  background-color: #eee;
}
</style>
