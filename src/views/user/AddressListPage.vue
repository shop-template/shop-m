<template>
  <van-address-list
    v-model="chosenAddressId"
    :list="list"
    :disabled-list="disabledList"
    disabled-text="以下地址超出配送范围"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    class="address-list"
  ></van-address-list>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'

const Router = useRouter()
const chosenAddressId = ref('1')
const list = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
    isDefault: true,
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000',
    address: '浙江省杭州市拱墅区莫干山路 50 号',
  },
];
const disabledList = [
  {
    id: '3',
    name: '王五',
    tel: '1320000000',
    address: '浙江省杭州市滨江区江南大道 15 号',
  },
]

const onAdd = () => Router.push({ path: '/addressEdit' })
const onEdit = (item, index) => Toast('编辑地址:' + index)
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
.address-list {
  :deep(.van-address-item .van-tag--danger) {
    background: var(--van-blue);
  }
  :deep(.van-address-list__bottom .van-button) {
    background: var(--van-blue);
    border-color: var(--van-blue);
  }
}
</style>