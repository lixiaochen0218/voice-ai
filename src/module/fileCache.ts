import Taro from "@tarojs/taro"

const downloadLoadingMap = {}
const cleanLoadingKey = (key: string) => {
  delete downloadLoadingMap[key]
}
const downloadAndSaveCache = async (url: string, cacheKey: string) => {
  const fs = Taro.getFileSystemManager()
  if (downloadLoadingMap[url]) return
  downloadLoadingMap[url] = true

  fs.getSavedFileList({
    success: console.log
  })
  return new Promise((resolve, reject) => {
    const fail = err => {
      cleanLoadingKey(url)
      console.log("downloadAndSaveCache", err)
      reject(err)
    }

    Taro.downloadFile({
      url,
      fail,
      success(file) {
        Taro.setStorage({
          key: cacheKey,
          data: file.tempFilePath,
          fail,
          success: resolve,
          complete: () => cleanLoadingKey(url)
        })
      }
    })
  })
}

const getCachePath = (cacheKey: string) => {
  const fs = Taro.getFileSystemManager()

  const cachePath = Taro.getStorageSync<string>(cacheKey)
  if (cachePath) {
    try {
      fs.accessSync(cachePath)
      return cachePath
    } catch (error) {
      Taro.removeStorageSync(cacheKey)
    }
  }
}

export const withCache = (url: string) => {
  const cacheKey = `video_cache_${url}`
  const cachePath = getCachePath(cacheKey)

  if (!cachePath) {
    downloadAndSaveCache(url, cacheKey)
  }

  // console.log("use cache", cachePath || url)

  return cachePath || url
}
