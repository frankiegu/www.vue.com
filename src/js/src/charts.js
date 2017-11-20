
// 引入 echarts 主模块。
import * as echarts from 'echarts/src/echarts';
// 引入柱状图和折线图。
import 'echarts/src/chart/bar';
import 'echarts/src/chart/line';
// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';
import 'echarts/src/component/toolbox';
// 基于准备好的dom，初始化echarts实例
let myChart = echarts.init(document.getElementById('main'));
// 绘制图表
myChart.setOption({
    title: {
        text: 'ECharts 柱形图'
    },
    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
let myChart1 = echarts.init(document.getElementById("main1"),"macarons");
let myChart2 = echarts.init(document.getElementById("main2"),"macarons");
let myChart3 = echarts.init(document.getElementById("main3"),"macarons");
let myChart4 = echarts.init(document.getElementById("main4"),"macarons");
let option1 = {
    title: {
        text: '温度状况',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['设定温度', '进水温度', '出水温度', '环境温度']
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: [
        {
            type: 'category', //x轴为类目类型
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 45
            },
            data: ['00:00:00', '00:05:00', '00:10:00', '00:15:00', '00:20:00', '00:25:00', '00:30:00', '00:35:00', '00:40:00', '00:45:00']

        }],
    yAxis: [
        {
            type: 'value'  //y轴为值类型
        }
    ],
    series: [{
        name: '设定温度',
        type: 'line',
        smooth: true,
        data: [55, 55, 55, 55, 55, 55, 55, 55, 55, 55]
    }]
}

let option2 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        y: -30,
        data: ['设定温度', '进水温度', '出水温度', '环境温度']
    },
    toolbox: {
        y: -30,
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: [
        {
            type: 'category', //x轴为类目类型
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 45
            },
            data: ['00:00:00', '00:05:00', '00:10:00', '00:15:00', '00:20:00', '00:25:00', '00:30:00', '00:35:00', '00:40:00', '00:45:00']

        }],
    yAxis: [
        {
            type: 'value'  //y轴为值类型
        }
    ],
    series: [{
        name: '进水温度',
        type: 'line',
        smooth: true,
        data: [15, 15, 16, 18, 18, 19, 19, 19, 19, 19]
    }]
}

let option3 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        y: -30,
        data: ['设定温度', '进水温度', '出水温度', '环境温度']
    },
    toolbox: {
        y: -30,
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: [
        {
            type: 'category', //x轴为类目类型
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 45
            },
            data: ['00:00:00', '00:05:00', '00:10:00', '00:15:00', '00:20:00', '00:25:00', '00:30:00', '00:35:00', '00:40:00', '00:45:00']

        }],
    yAxis: [
        {
            type: 'value'  //y轴为值类型
        }
    ],
    series: [{
        name: '出水温度',
        type: 'line',
        smooth: true,
        data: [20, 25, 30, 35, 38, 44, 46, 48, 53, 56]
    }]
}

let option4 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        y: -30,
        data: ['设定温度', '进水温度', '出水温度', '环境温度']
    },
    toolbox: {
        y: -30,
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    xAxis: [
        {
            type: 'category', //x轴为类目类型
            axisLabel: {
                show: true,
                interval: 0,
                rotate: 45
            },
            data: ['00:00:00', '00:05:00', '00:10:00', '00:15:00', '00:20:00', '00:25:00', '00:30:00', '00:35:00', '00:40:00', '00:45:00']

        }],
    yAxis: [
        {
            type: 'value'  //y轴为值类型
        }
    ],
    series: [{
        name: '环境温度',
        type: 'line',
        smooth: true,
        data: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15]
    }]
}

// 为echarts对象加载数据 
myChart1.setOption(option1);
myChart2.setOption(option2);
myChart3.setOption(option3);
myChart4.setOption(option4);
//联动配置
echarts.connect([myChart1,myChart2, myChart3, myChart4]);

