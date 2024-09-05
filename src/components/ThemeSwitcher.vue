<script lang="ts" setup>
// import { computed } from 'vue';
import { Moon, Sunny } from '@element-plus/icons-vue';
import { isDark, toggleDark } from '@/composables';

function toggleTheme() {
  toggleDark();
}
</script>

<template>
  <el-button
    :type="!isDark ? 'info' : 'default'"
    :icon="!isDark ? Moon : Sunny"
    :circle="true"
    @click.prevent="toggleTheme"
  />
</template>
