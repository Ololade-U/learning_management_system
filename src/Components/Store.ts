import { create } from "zustand";

interface StoreQuery{
    openNav : boolean;
    setOpenNav : (value  : boolean)=> void
}

const useStoreQuery = create<StoreQuery>((set)=> ({
    openNav : false,
    setOpenNav : (value : boolean)=> set(()=> ({
        openNav : value
    }))
}))

export default useStoreQuery