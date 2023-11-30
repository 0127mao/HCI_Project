<script setup>
import Content from '@/components/library/Content.vue';
import Radio from '@/components/library/Radio.vue';
</script>


<template>
  <div>
    <div style="display: flex, flex-direction: column; margin-left: 250px; margin-right: 250px">
      <Radio></Radio>
      <Content></Content>
      <div>
        <el-backtop target="" visibility-height="20" right="50" bottom="50"></el-backtop>
      </div>
    </div>
    <div style="background-color: #f2f2f2; height: 0px; width: 100%; margin-top: 120px;">

    </div>
  </div>

</template>
  
