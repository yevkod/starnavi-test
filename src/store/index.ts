'use client'

import { StoreState } from "@/types";
import { create, useStore } from "zustand";


export const heroesStore = create<StoreState>((set) => ({
    heroes: null,
    selectedHero: null,
    page: 1,
    error: false,
    errorMessage: '',
    setHeroes: (heroes) => set({ heroes }),
    setSelectedHero: (hero) => set({ selectedHero: hero }),
    nextPage: () => set((state) => ({ page: state.page + 1 })),
}))

export const useHeroesStore = () => useStore(heroesStore);