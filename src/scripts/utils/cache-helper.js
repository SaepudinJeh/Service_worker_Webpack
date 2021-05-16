import CONFIG from "../globals/config";

const CacheHelper = {
    async cachingAppShell(request) {
        const cache = await this._openCache();
        cache.addAll(request);
    },

    async deleteOldCache() {
        const cacheNames = await caches.keys();
        cacheNames
            .filter(name => name !== CONFIG.CACHE_NAME)
            .map(filterName => caches.delete(filterName));
    },

    async revalidateCache(request) {
        const response = await caches.match(request);

        if(response) {
            this._fetchRequest(request);
            return response;
        }

        return this._fetchRequest(request);
    },

    async _openCache() {
        return caches.open(CONFIG.CACHE_NAME);
    },

    async _fetchRequest(request) {
        const response = await fetch(request);

        if (!response || response.status !== 200) {
            return response;
        }

        await this._addAll(request);
        return response;
    },

    async _addAll(request) {
        const cache = await this._openCache();
        cache.add(request);
    },
};

export default CacheHelper;