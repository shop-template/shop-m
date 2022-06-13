<template>
  <van-address-edit
    :area-list="areaList"
    :address-info="addressInfo"
    show-postal
    show-delete
    show-set-default
    show-search-result
    detail-rows="2"
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    class="address-edit"
  ></van-address-edit>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Toast } from 'vant'
import { areaList } from '@vant/area-data'
import addressList from './addressList'
import { useLayoutNavbar } from '@/store'

const layoutNavbar = useLayoutNavbar()

const addressInfo = ref({})
const Route = useRoute()
onMounted(() => {
  if (Route.query.id) {
    addressInfo.value = addressList.find(x => x.id === Route.query.id * 1)
    layoutNavbar.setNavbar({
      title: '编辑地址'
    })
  } else {
    layoutNavbar.setNavbar({
      title: '新增地址'
    })
  }
})

const onSave = (content) => {
  console.log(content)
}
const onDelete = (content) => {
  console.log(content)
}

// 详细地址搜索的逻辑
const searchResult = ref([])
const onChangeDetail = (val) => {
  console.log(val)
  if (val) {
    if (val.includes('白求恩')) {
      searchResult.value = [
        {
          name: '白求恩医院',
          address: '山西白求恩医院(山西医学科学院)',
        },
      ]
    } else {
      searchResult.value = [
        {
          name: '虹桥火车站',
          address: '上海市闵行区',
        },
      ]
    }
  } else {
    searchResult.value = []
  }
}
</script>

<style lang="less" scoped>
@import './../../styles/login.less';
.address-edit {
  :deep(.van-address-edit__buttons .van-button--danger) {
    background: var(--van-blue);
    border-color: var(--van-blue);
  }
}
</style>