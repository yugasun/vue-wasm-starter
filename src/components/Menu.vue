<script lang="ts" setup>
import {
  ArrowDown,
  HomeFilled,
  Menu as IconMenu,
} from '@element-plus/icons-vue';
</script>

<template>
  <el-dropdown class="menu-list">
    <span
      class="el-dropdown-link cursor-pointer text-lg font-medium text-dark dark:text-light"
    >
      Menus
      <el-icon class="el-icon--right">
        <ArrowDown />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu class="w-100">
        <router-link class="menu-item" to="/">
          <el-dropdown-item :icon="HomeFilled">
            Home
          </el-dropdown-item>
        </router-link>
        <router-link class="menu-item" to="/detail">
          <el-dropdown-item :icon="IconMenu">
            Detail
          </el-dropdown-item>
        </router-link>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss">
.menu-list {
  width: 130px;
  margin-left: 20px;
  background: none;

  .menu-item {
    width: 100px;
  }
}
</style>
