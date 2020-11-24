const width = 400;
const height = 400;
// svg
const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('transform', `translate(${window.innerWidth / 2 - 200},${window.innerHeight / 2 - 200})`)
    .style('background', 'rgba(0, 0, 0, .4)');

// 坐标系
const projection = d3.geoMercator()
    .center([ 93.509174, 42.833888])
    .scale(600)
    .translate([50, 50]);

//  path| 生成路径的方法
const path = d3.geoPath().projection(projection);
// console.log('path 对象',path);

// 获取json后，画路径呗
d3.json('../geojson/aa.json').then((data)=>{
    
    const groups = svg.append('g')
    groups.selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .style('fill','#000')
        .style('fill-opacity','0.8')
        .style('stroke','#46D2F4')
        .style('stroke-width', 0.3)
        .attr('d',path)
        .attr('transform','scale(4,4)')
})

