// 导航条动态效果
document.addEventListener("DOMContentLoaded", () => {
  let links = document.querySelectorAll("nav a");
  links.forEach(a => {
    a.addEventListener("mouseover", () => a.style.color = "yellow");
    a.addEventListener("mouseout", () => a.style.color = "white");
  });

  // 医学成像知识图谱
  let cy = cytoscape({
    container: document.getElementById('graph'),

    elements: [
      { data: { id: 'CT', label: 'CT 成像' } },
      { data: { id: 'XRay', label: 'X线' } },
      { data: { id: 'Dose', label: '辐射剂量' } },
      { data: { id: 'Tissue', label: '组织密度' } },
      { data: { id: 'CT', source: 'CT', target: 'XRay' } },
      { data: { id: 'CT2', source: 'CT', target: 'Dose' } },
      { data: { id: 'CT3', source: 'CT', target: 'Tissue' } }
    ],

    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#0074D9',
          'label': 'data(label)',
          'color': '#fff'
        }
      },
      {
        selector: 'edge',
        style: {
          'line-color': '#aaa',
          'target-arrow-color': '#aaa',
          'target-arrow-shape': 'triangle'
        }
      }
    ],

    layout: {
      name: 'circle'
    }
  });
    cy.on('tap', 'node', function(evt){
    let node = evt.target;
    cy.nodes().forEach(n => n.style('opacity', 0.3));
    node.style('opacity', 1);
    node.connectedEdges().style('opacity', 1);
  });

});
