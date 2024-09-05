<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import HelloWorld from '@/components/HelloWorld.vue';
import VueUse from '@/components/VueUse.vue';

const { t } = useI18n();
</script>

<template>
  <div class="index-page flex flex-col justify-between items-center">
    <img alt="Vue logo" src="@/assets/images/logo.png" class="w-40">
    <HelloWorld :msg="t('common.hello')" />
    <VueUse />
  </div>
</template>

<style lang="scss"></style>
