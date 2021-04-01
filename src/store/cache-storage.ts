interface GetCacheArgs {
  key: string;
}

interface SetCacheArgs {
  key: string;
  value: string;
}

interface DeleteSessionArgs {
  key: string;
}

interface CacheStore {
  _sessions: Map<string, string>;
  get: (args: GetCacheArgs) => string | undefined;
  set: (args: SetCacheArgs) => void;
  delete: (args: DeleteSessionArgs) => void;
}

const CacheStore: CacheStore = {
  _sessions: new Map(),
  get({ key }) {
    return this._sessions.get(key);
  },
  set({ key, value }) {
    this._sessions.set(key, value);
  },
  delete({ key }) {
    this._sessions.delete(key);
  },
};

export default CacheStore;
