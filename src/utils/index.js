export const properImageSize = (targetWidth, image) => ({
    width : targetWidth,
    height : targetWidth * image.height / image.width
})
