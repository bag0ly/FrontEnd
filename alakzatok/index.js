let state = {
    circle:0,
    square:0,
    rectangle:0
};

document.getElementById("shapes").addEventListener("submit", function(event){
    event.preventDefault();
    let action = event.target.elements.action.value;
    let shapeName= event.target.elements.selectedShape.value;
    if(action === "increment")
    {
        state[shapeName]++
    }
    else{
        state[shapeName]--   
    }
    render();
    console.log(action, shapeName);
})
document.addEventListener("DOMContentLoaded", function() {
    var resetButton = document.getElementById("resetButton");

    var form = document.getElementById("shapes");

    resetButton.addEventListener("click", function() {
        
        form.reset();

        state = {
            circle:0,
            square:0,
            rectangle:0
        };
        render();
    });
    
});
function render() {
    document.getElementById("sh-circle").innerHTML=state.circle
    document.getElementById("sh-square").innerHTML=state.square
    document.getElementById("sh-rectangle").innerHTML=state.rectangle
}