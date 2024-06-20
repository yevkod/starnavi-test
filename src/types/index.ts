export interface Hero {
    id: number;
    name: string;
    films: number[];
}

export interface HeroApi {
    count: number;
    next: string;
    previous: null;
    results: Hero[];
}

export interface StoreState {
    heroes: HeroApi | null;
    selectedHero: Hero | null;
    page: number;
    error: boolean;
    errorMessage: string;
    setHeroes: (heroes: HeroApi) => void;
    setSelectedHero: (hero: Hero) => void;
    nextPage: () => void;
}