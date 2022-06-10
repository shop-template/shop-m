<template>
  <van-address-edit
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    class="address-edit"
  ></van-address-edit>
</template>

<script setup>
import { ref } from 'vue'
import { Toast } from 'vant'

const searchResult = ref([])

const onSave = () => Toast('save');
const onDelete = () => Toast('delete');
const onChangeDetail = (val) => {
  if (val) {
    searchResult.value = [
      {
        name: '黄龙万科中心',
        address: '杭州市西湖区',
      },
    ];
  } else {
    searchResult.value = []
  }
}
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
.address-edit {
  :deep(.van-address-item .van-tag--danger) {
    background: var(--van-blue);
  }
  :deep(.van-address-list__bottom .van-button) {
    background: var(--van-blue);
    border-color: var(--van-blue);
  }
}
</style>