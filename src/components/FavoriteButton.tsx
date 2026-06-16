import { Heart } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

interface FavoriteButtonProps {
  itemId: number;
  onLoginRequired?: () => void;
  size?: 'sm' | 'md';
  className?: string;
}

export default function FavoriteButton({ itemId, onLoginRequired, size = 'md', className = '' }: FavoriteButtonProps) {
  const { user } = useAuth();
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(itemId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      onLoginRequired?.();
      return;
    }
    toggleFavorite(itemId);
  };

  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
  const btnSize = size === 'sm' ? 'p-1.5' : 'p-2';

  return (
    <button
      onClick={handleClick}
      title={user ? (fav ? 'Favorilerden çıkar' : 'Favorilere ekle') : 'Favorilere eklemek için giriş yapın'}
      className={`${btnSize} rounded-full transition-all duration-200 
        ${fav
          ? 'bg-red-50 hover:bg-red-100 text-red-500'
          : 'bg-white/80 hover:bg-white text-gray-400 hover:text-red-400'}
        shadow-sm backdrop-blur-sm ${className}`}
    >
      <Heart
        className={`${iconSize} transition-all duration-200 ${fav ? 'fill-red-500 stroke-red-500 scale-110' : ''}`}
      />
    </button>
  );
}