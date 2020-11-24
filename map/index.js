const width = 400;
const height = 400;
// 定义svg
const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('transform', `translate(${window.innerWidth / 2 - 200},${window.innerHeight / 2 - 200})`)
    .style('background', 'rgba(0, 0, 0, .4)');

// 设置坐标系
const projection = d3.geoMercator()
    .center([ 93.509174, 42.833888])
    .scale(600)
    .translate([50, 50]);

//  path
const path = d3.geoPath().projection(projection);
// console.log('path 对象',path);

d3.json('../geojson/aa.json').then((data)=>{
    // console.log('data:',data);
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

