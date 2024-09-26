import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface NavigationStore {
    isNavOpen: boolean;
    isSearchOpen: boolean;
    isSearchActive: boolean;

    // For Nav bar
    openNavBar: () => void;
    closeNavBar: () => void;
    toggleNavBar: () => void;

    // For Search bar
    openSearchBar: () => void;
    closeSearchBar: () => void;
    toggleSearchBar: () => void;

    // For Searchbar active
    makeSearchBarActive: () => void;
    makeSearchUnactive: () => void;

}

export const useNavigationToggle = create(
    persist<NavigationStore>(
      (set, get) => ({
        isNavOpen: false,
        isSearchOpen: false,
        isSearchActive: false,
        // For Nav bar
        openNavBar: () => {
            set({isNavOpen: true});
        },
        closeNavBar: () => {
            set({isNavOpen: false});
        },
        toggleNavBar: () => {
            const isOpen = get().isNavOpen;
            if (isOpen) {
                set({isNavOpen: false});
            } else {
                set({isNavOpen: true});
            }
        },
        // For Search bar
        openSearchBar: () => {
            set({isSearchOpen: true});
        },
        closeSearchBar: () => {
            set({isSearchOpen: false});
        },
        toggleSearchBar: () => {
            const isOpen = get().isSearchOpen;
            if (isOpen) {
                set({isSearchOpen: false});
            } else {
                set({isSearchOpen: true});
            }
        },

        // For Searchbar active
        makeSearchBarActive: () => {
            set({isSearchActive: true});
        },
        makeSearchUnactive: () => {
            set({isSearchActive: false});
        },
      }),
    {
      name: "@navigation-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);