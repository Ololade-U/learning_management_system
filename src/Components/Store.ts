import { create } from "zustand";

interface StoreQuery{
    openNav : boolean;
    activePage : string;
    setOpenNav : (value  : boolean)=> void
    setActivePage : (value  : string)=> void
}

const useStoreQuery = create<StoreQuery>((set)=> ({
    openNav : false,
    activePage : '',
    setOpenNav : (value)=> set(()=> ({
        openNav : value
    })),
    setActivePage : (value) => set(()=> ({
        activePage : value
    }))
}))

export default useStoreQuery