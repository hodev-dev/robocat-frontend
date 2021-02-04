import { decode, isBlurhashValid } from 'blurhash'
import { useEffect, useState } from 'react'

export function useBlurhash(blurhash, width, height, punch) {
  punch = punch || 1

  const [url, setUrl] = useState(null)

  useEffect(() => {
    let isCancelled = false
    if (isBlurhashValid(blurhash).result === true) {
      console.log('varify')
      const pixels = decode(blurhash, width, height, punch)
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const context = canvas.getContext('2d')
      const imageData = context.createImageData(width, height)
      imageData.data.set(pixels)
      context.putImageData(imageData, 0, 0)
      canvas.toBlob(blob => {
        if (!isCancelled) {
          setUrl(oldUrl => {
            if (oldUrl) {
              URL.revokeObjectURL(oldUrl)
            }
            return URL.createObjectURL(blob)
          })
        }
      })
    } else {
      setUrl(undefined);
    }


    return function cleanupBlurhash() {
      isCancelled = true
      setUrl(oldUrl => {
        if (oldUrl) {
          URL.revokeObjectURL(oldUrl)
        }
        return null
      })
    }
  }, [blurhash, height, width, punch])

  return [url, setUrl]
}