

const resizeImage = (url: string) => {
    const target = "media/"
    if (url==null ||!url.includes(target))return url
    const index = url.indexOf(target) + target.length
    const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index)
    
    return newUrl;
}

export default resizeImage 
