createPoster: function (item) {
    const entityE1 = document.createElement("a-entity");
    entityEl.setAttribute("visible",true);
    entityE1.setAttribute("geometry",{
        primitive: "plane",
        width:20,
        height:28
    }),
    entityE1.setAttribute("position",{x: 0, y: 5,Z:0.1}),
    entityE1.setAttribute("material",{src: item.url})
} 

