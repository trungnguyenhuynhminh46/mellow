import RGB from '@shared/classes/RGB.ts'

export const generateImageElement = (imageUrl: string): HTMLImageElement => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const imgElement = document.createElement('img')
  imgElement.onload = function() {
    ctx && ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height)
  }
  imgElement.crossOrigin = ''
  imgElement.src = imageUrl
  return imgElement
}

export const generateAverageColor = (imageUrl: string): RGB => {
  const imgElement = generateImageElement(imageUrl)
  const blockSize = 5 // only visit every 5 pixels
  const defaultRGB: RGB = new RGB(0, 0, 0)
  const canvas = document.createElement('canvas')
  const context = canvas.getContext && canvas.getContext('2d')
  let data: ImageData | null
  let i = -4
  const rgb: RGB = new RGB(0, 0, 0)
  let count = 0

  if (!context) {
    return defaultRGB
  }

  const height = canvas.height = imgElement.naturalHeight || imgElement.offsetHeight || imgElement.height
  const width = canvas.width = imgElement.naturalWidth || imgElement.offsetWidth || imgElement.width

  context.drawImage(imgElement, 0, 0)

  try {
    data = context.getImageData(0, 0, width, height)
  } catch (e) {
    return defaultRGB
  }

  const length = data.data.length

  while ((i += blockSize * 4) < length) {
    ++count
    rgb.r += data.data[i]
    rgb.g += data.data[i + 1]
    rgb.b += data.data[i + 2]
  }

  rgb.r = ~~(rgb.r / count)
  rgb.g = ~~(rgb.g / count)
  rgb.b = ~~(rgb.b / count)

  return rgb
}

export const generateColorByAlpha = (base: RGB, alpha: number): RGB => {
  return new RGB(Math.floor(base.r * alpha), Math.floor(base.g * alpha), Math.floor(base.b * alpha))
}

export const generateDifferentShadeOfColor = (color: RGB, numberOfShades: number): RGB[] => {
  const unitColor = new RGB(Math.floor(color.r / 10), Math.floor(color.g / 10), Math.floor(color.b / 10))
  const iStart = -Math.floor((numberOfShades-1)/2)
  const iEnd = Math.floor(numberOfShades/2)
  const shades = []
  for (let i = iStart; i <= iEnd; i++) {
    const alpha = i + 10
    shades.push(generateColorByAlpha(unitColor, alpha))
  }
  return shades
}

export const generateThemeColors = (themeColor: RGB | string): RGB[] => {
  let color: RGB
  if (typeof themeColor === 'string') {
    color = generateAverageColor(themeColor)
  }
  else {
    color = themeColor
  }
  return generateDifferentShadeOfColor(color, 10)
}
