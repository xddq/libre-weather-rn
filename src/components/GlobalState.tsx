/**
 * @description Initialises our store/global state. Whenever we want to access
 * the global state we have to import useStore from this file.
 * src:
 * https://blog.bitsrc.io/zustands-guide-to-simple-state-management-12c654c69990
 */
import create from 'zustand';

interface GlobalState {
  url: string;
  officialUrl: 'https://weather.pd-dev.xyz';
  setUrl: (url: string) => void;
  clearState: () => void;
}

// creates our store(our global state). The set function merges the current
// state object with the resulting object of our set function.
// src: https://github.com/pmndrs/zustand
const useStore = create<GlobalState>(set => ({
  officialUrl: 'https://weather.pd-dev.xyz',
  url: 'https://weather.pd-dev.xyz',
  setUrl: (url: string) => set(() => ({url: url})),
  clearState: () => set(_ => ({url: 'https://weather.pd-dev.xyz'})),
}));

export default useStore;
