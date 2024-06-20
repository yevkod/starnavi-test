
import { API } from '@/helpers';
import { heroesStore } from '@/store';
import axios from 'axios';

const Data = () => {
    const { getState, setState } = heroesStore;
    const page = getState()

    const getData = async () => {
        try {
            const response = await axios.get(`${API}/people?page=${page.page}`);
            response.status === 200
                ? setState({ heroes: response.data })
                : setState({ error: true, errorMessage: 'Error while loading data...' });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : 'An unknown error occurred.';
            setState({ error: true, errorMessage });
        }
    };

    return {
        getData,
    };
};

export const dataRequest = Data();
