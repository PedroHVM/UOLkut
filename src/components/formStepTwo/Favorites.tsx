import React, { ChangeEvent } from 'react';
import TextArea from './TextArea';
import './Favorites.css';

interface FavoritesProps {
  favoriteMusic: string;
  favoriteMovies: string;
  favoriteGames: string;
  favoriteBooks: string;
  onChange: (key: keyof FavoritesProps, value: string) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favoriteMusic, favoriteMovies, favoriteGames, favoriteBooks, onChange }) => {
  return (
    <div className="fav-s"> {/* Adicione a classe fav-s para criar duas colunas */}
      <label>
        <TextArea
          label="Músicas"
          value={favoriteMusic}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange('favoriteMusic', e.target.value)}
        />
      </label>

      <label>
        <TextArea
          label="Filmes"
          value={favoriteMovies}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange('favoriteMovies', e.target.value)}
        />
      </label>

      <label>
        <TextArea
          label="Jogos"
          value={favoriteGames}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange('favoriteGames', e.target.value)}
        />
      </label>

      <label>
        <TextArea
          label="Livros"
          value={favoriteBooks}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange('favoriteBooks', e.target.value)}
        />
      </label>
    </div>
  );
};

export default Favorites;