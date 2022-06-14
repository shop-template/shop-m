export function download(dataURL, filename) {
  const blob = dataURLToBlob(dataURL)
  const url = window.URL.createObjectURL(blob)

  const a = document.createElement("a")
  a.style = "display: none"
  a.href = url
  a.download = filename

  document.body.appendChild(a)
  a.click()

  window.URL.revokeObjectURL(url)
}

// One could simply use Canvas#toBlob method instead, but it's just to show
// that it can be done using result of SignaturePad#toDataURL.
export function dataURLToBlob(dataURL) {
  // Code taken from https://github.com/ebidel/filer.js
  const parts = dataURL.split(';base64,')
  const contentType = parts[0].split(":")[1]
  const raw = window.atob(parts[1])
  const rawLength = raw.length
  const uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }

  return new Blob([uInt8Array], { type: contentType })
}