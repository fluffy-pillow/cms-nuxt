export function getDepth(obj) {
  // todo: сделать скрипт, считающий глубину массива
  return 2
}

export const siblings = n => [...n.parentElement.children].filter(c=>c!==n)


export default {getDepth, siblings}
