<template>
  <van-address-list
    v-model="chosenAddressId"
    :list="list"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    @select="onSelect"
    class="address-list"
  ></van-address-list>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
import addressList from './addressList'

const Router = useRouter()
const chosenAddressId = ref(1)
const list = ref([])
list.value = addressList

const onAdd = () => Router.push({ path: '/addressEdit' })
const onEdit = (item) => Router.push({ path: '/addressEdit', query: { id: item.id } })
const onSelect = (item) => Toast(`选择地址id：${item.id}`)
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
.address-list {
  :deep(.van-address-item .van-tag) {
    background: var(--van-blue);
  }
  :deep(.van-address-list__bottom .van-button) {
    background: var(--van-blue);
    border-color: var(--van-blue);
  }
}
</style>