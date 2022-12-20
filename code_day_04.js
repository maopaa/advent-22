/**
 * ⭐ Puntos conseguidos: 121
 * 🕑 2449 ops/s
 * 🎯 Complejidad cognitiva: 1
*/

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]
  
fitsInOneBox(boxes) // true
fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]) // true

// > Solución
function fitsInOneBox(boxes) {
  const sort = boxes.sort((first, second) => {
    return first.l - second.l 
  })

  return sort.every(({ l, w, h }, index, list) => {
    let firstBox = index === 0
    let { l: prevL, w: prevW, h: prevH } = list[index - 1] || {}
    let canContainPrevious = l > prevL && w > prevW && h > prevH
    
    return firstBox || canContainPrevious
  })
}