const container = document.getElementsByClassName("container")
const block = document.getElementsByClassName("block")
let hs = new HorizontalScroll.default({
    container: container,
    blocks: block,
    isAnimated: true,
    springEffect: 10
})