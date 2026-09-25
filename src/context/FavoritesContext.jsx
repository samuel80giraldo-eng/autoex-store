import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites =
        localStorage.getItem("autoex-favorites");

      return savedFavorites
        ? JSON.parse(savedFavorites)
        : [];
    } catch (error) {
      console.error(
        "Error cargando favoritos:",
        error
      );

      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "autoex-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const addToFavorites = (product) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite =
        currentFavorites.some(
          (item) => item.id === product.id
        );

      if (alreadyFavorite) {
        return currentFavorites;
      }

      return [
        ...currentFavorites,
        product,
      ];
    });
  };

  const removeFromFavorites = (productId) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (item) => item.id !== productId
      )
    );
  };

  const isFavorite = (productId) => {
    return favorites.some(
      (item) => item.id === productId
    );
  };

  const toggleFavorite = (product) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const favoritesCount = favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        toggleFavorite,
        favoritesCount,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}