const container = document.getElementById("drag-and-drop-app");
let state = {
  elemek: {
    "elso": {
        id: "elso",
        x: container.offsetLeft,
        y: container.offsetTop,
    },
    "masodik": {
        id: "masodik",
        x: container.offsetLeft + 20,
        y: container.offsetTop + 150,
    },
    "harmadik": {
        id: "harmadik",
        x: container.offsetLeft + 40,
        y: container.offsetTop + 300,
    }
  },
  draggedId: ""
};

window.onload = render;

function render() {
  let dobozokHTML = '';
  for(let elem of Object.values(state.elemek)) {
 
    dobozokHTML += `
      <div
        class="box ${state.draggedId === elem.id ? "grabbed" : "not-grabbed"}"
        style="position: absolute; left: ${elem.x}px; top: ${elem.y}px;"
        onmousedown="dobozDragStart(window.event)"
        onmouseup="dobozDragEnd(window.event)"
        onmousemove="dobozMouseMove(window.event)"
        data-egyedi-azonosito="${elem.id}"
      >
        <div class="card-body">
          <h5 class="card-title display-4">${elem.id}</h5>
        </div>
      </div> 
    `;
  }

  document.getElementById("drag-and-drop-app").innerHTML = dobozokHTML;
}

function dobozDragStart(event) {
  const box = event.target.closest(".box");
  state.draggedId = box.dataset.egyediAzonosito;
  render();
}

function dobozDragEnd() {
  state.draggedId = null;
  render();
}

function dobozMouseMove(event) {
  if (!state.draggedId) {
    return;
  } 

  const box = event.target.closest(".box");
  if(!box) {
    return;
  } 
 
  state.elemek[state.draggedId].x = document.documentElement.scrollLeft + event.clientX - box.offsetWidth / 2;
  state.elemek[state.draggedId].y = document.documentElement.scrollTop + event.clientY - box.offsetHeight / 2;
  render();
  
}
