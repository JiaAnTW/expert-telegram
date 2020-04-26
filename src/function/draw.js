import d3 from "d3";
const draw=()=>{
    const margin = { top: 10, right: 35, bottom: 20, left: 40 },
    width = document.querySelector(`#${d3}`).clientWidth,
    height = width
    
    const svg = d3
    .select(document.querySelector(`#${d3}`))
    .append('svg')
    .attr('width', width)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
}

export default draw;