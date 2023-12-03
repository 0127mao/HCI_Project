<template>
    <div style="margin: 8px;">
        <div style="display: flex; align-items: center;">
            <img src="writer-icon.png" style="width: 24px; height: 24px; margin-right: 8px;">
            <h2>作家热度值榜</h2>
        </div>

        <div style="display: flex; align-items: center; margin-top: 16px;">
            <label>
                <input type="radio" v-model="sortType" value="topic"> 话题度
            </label>
            <label style="margin-left: 16px;">
                <input type="radio" v-model="sortType" value="popularity"> 作品热度
            </label>
            <img src="more-icon.png" style="width: 16px; height: 16px; margin-left: auto;">
        </div>

        <div style="margin-top: 16px;">
            <label v-for="factor in filterOptions" :key="factor">
                <input type="checkbox" v-model="selectedFilters" :value="factor"> {{ factor }}
            </label>
        </div>

        <div style="margin-top: 16px;">
            <template v-if="top10Data.length > 0">
                <div v-for="(writer, index) in top10Data" :key="writer.name" style="display: flex; align-items: center; margin-bottom: 8px;">
                    <span style="width: 120px;">{{ writer.name }}</span>
                    <div style="flex-grow: 1; margin: 0 8px;">
                        <div style="background-color: #eee; height: 8px; border-radius: 4px;">
                            <div :style="{ width: writer.topicHeat + '%', background_color:'#4287f5', height: '8px', border_radius: '4px' }"></div>
                        </div>
                    </div>
                    <span>{{ writer.workHeat }}</span>
                </div>
            </template>
            <template v-else>
                <p>暂无数据</p>
            </template>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        titleName: {
            type: String,
            default() {
                return '';
            },
        },
    },
    data() {
        return {
            curSelType: 2, // 1 废水 2 废气， 默认选中的模块是 废气模块
            curSelFactor: '烟尘', // 默认选中的因子是 烟尘
            curSelFactorCode: 'a34013',
            top10Data: [
                { name: '企业名称1', value: 6629, percent: 100 },
                { name: '企业名称2', value: 6023, percent: 90 },
                { name: '企业名称3', value: 5680, percent: 80 },
                { name: '企业名称4', value: 4258, percent: 70 },
                { name: '企业名称5', value: 2561, percent: 40 },
                { name: '企业名称6', value: 2500, percent: 30 },
                { name: '企业名称7', value: 2500, percent: 30 },
                { name: '企业名称8', value: 2500, percent: 30 },
                { name: '企业名称9', value: 2500, percent: 30 },
                { name: '企业名称10', value: 2500, percent: 30 },
            ],
        };
    },
    methods: {
        // 切换模块
        handleTypeClick(type) {
            if(this.curSelType !== type) {
                this.curSelType = type;
                if (type === 1) {
                    this.curSelFactor = 'COD';
                    this.curSelFactorCode = 'w01018';
                }else {
                    this.curSelFactor = '烟尘';
                    this.curSelFactorCode = 'a34013';
                }
                this.getTop10Data();
            }
        },
        // 切换因子
        handleFactorClick(name, code) {
            this.curSelFactor = name;
            this.curSelFactorCode = code;
            this.getTop10Data();
        },
        // 获取数据
        getTop10Data() {
            this.top10Data = [];
            // 具体业务 调接口 实现
            // ...
        },
    },
    mounted() {
        this.getTop10Data();
    },
    created() {
    },
};
</script>
<style lang="scss" scoped>
.icon-block{
    display:inline-block;
    width:6px;
    height:22px;
    background-color: #2D8CF0;
    border-radius: 10px;
}
.icon-txt{
    position: relative;
    top: -5px;
    padding-left: 5px;
    font-size: 16px;
    color:#2D8CF0;
    font-weight: bold;
}
::v-deep .el-progress__text{
    display:none;
}
.factorName{
    display: inline-block;
    // background: blue;
    height: 30px;
    width: 55px;
    text-align: center;
    line-height: 30px;
    margin-left: 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight:bold;
    color: white;
}
.selFactor{
    background: #458BF3;
}
.noSelFactor{
    color: #458BF3;
}
.selType{
    color: #2D8CF0;
}
.noSelType{
    color: #606266;
}
</style>





