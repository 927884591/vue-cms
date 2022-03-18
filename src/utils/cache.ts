class localCache {
  setCache(key: string, item: any): void {
    window.localStorage.setItem(key, JSON.stringify(item))
  }
  getCache(key: string): any {
    const res: any = window.localStorage.getItem(key)
    return JSON.parse(res)
  }
  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache(): void {
    window.localStorage.clear()
  }
}
export default new localCache()
