AFRAME.registerComponent("car",{
    tick: function(){
        var pos = this.el.getAttribute("position");
        this.el.setAttribute("position",{x:pos.x+0.01,y:pos.y,z:pos.z});
    }
})

window.addEventListener("click",()=>{
    document.getElementById("car").setAttribute("car","");
})