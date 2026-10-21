const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dist/index.html','utf8');
for(const [,ref] of html.matchAll(/(?:src|href)="([^"]+)"/g))if(!/^(https?:|#|mailto:|tel:)/.test(ref))assert(fs.existsSync('dist/'+ref),ref);
for(const id of ['home','about','projects','contact'])assert(html.includes(`id="${id}"`));
function el(dataset={}){return {dataset,innerHTML:'',textContent:'',listeners:{},classList:{toggle(){},add(){},remove(){}},addEventListener(k,f){this.listeners[k]=f},setAttribute(k,v){this[k]=v},focus(){},showModal(){this.open=true},close(){this.open=false;this.listeners.close?.()}}}
const filters=['all','platforms','web','automation'].map(filter=>el({filter}));
const categories=['platforms automation','automation','platforms','web automation','platforms automation','platforms web','web'];
const cards=categories.map(categories=>el({categories}));const triggers=['glasswing','lonelyplanet','opticare','veomas','ingemann','trust','brainlabs'].map(project=>el({project}));
const nodes=Object.fromEntries(['#project-grid','#case-dialog','#case-content','.close-dialog','#year'].map(k=>[k,el()]));
const document={body:el(),querySelector:s=>nodes[s],querySelectorAll:s=>s==='[data-filter]'?filters:s==='.project'?cards:triggers};
vm.runInNewContext(fs.readFileSync('dist/app.js','utf8'),{document,Date});
assert.equal((nodes['#project-grid'].innerHTML.match(/class="project-open"/g)||[]).length,7);
filters[1].listeners.click();assert.equal(cards.filter(c=>!c.hidden).length,4);filters[2].listeners.click();assert.equal(cards.filter(c=>!c.hidden).length,3);filters[0].listeners.click();assert(cards.every(c=>!c.hidden));
for(const trigger of triggers){trigger.listeners.click();assert(nodes['#case-dialog'].open);assert(nodes['#case-content'].innerHTML.includes('My contribution'));nodes['.close-dialog'].listeners.click();assert.equal(nodes['#case-dialog'].open,false)}
assert(!fs.existsSync('dist/assets/opticare-original.jpeg'));
console.log('PASS: assets, navigation, seven case studies, all category filters and dialog open/close behavior.');
