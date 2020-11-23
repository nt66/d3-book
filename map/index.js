const width = 800;
const height = 800;
const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('transform', `translate(${window.innerWidth / 2 - 200},${window.innerHeight / 2 - 200})`)
    // .style('background', 'rgba(0, 0, 0, .4)');

const projection = d3.geoMercator()
    .center([ 93.509174, 42.833888])
    .scale(600)
    .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

d3.json('../geojson/aa.json',(error,root)=>{
    if(error){
        console.error(error);
    }  
    console.log('12312',root);
    const groups = svg.append('g');
    groups.selectAll('path')
        .data(root.features)
        .enter()
        .append('path')
        .attr('d',path)

})

