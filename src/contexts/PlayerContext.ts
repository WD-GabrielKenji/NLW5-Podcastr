import { createContext } from 'react';

type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
}

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    play: (episode: Episode) => void;
}

export const PlayerContext = createContext({} as PlayerContextData); // Fazendo um atribuição ao OBJ vaziu para que ele contenha a estrutura da tipagem do PlayerContextData, tipado o PlayerContext com a tipagem do PlayerContextData, facilitando na hora de manipulação dos dados nos componentes.

