import { createContext, useState } from "react";

export const ModalContext = createContext();

// ModalFields: {foldername, filename, language, type, isopenmodel}
function ModalProvider({children}){
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalType, setModalType] = useState(null);

    const setModal = (isOpenModal, type) => {
        setIsOpenModal(isOpenModal);
        setModalType(type);
    }
    return (
        <ModalContext.Provider value={{isOpenModal, setIsOpenModal, modalType, setModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;