import { createContext, useState } from "react";

export const PlaygroundContext = createContext();

const PlaygroundProvider = ({ children }) => {
    // rough implementation of a playground

    const [folders, setFolders] = useState([
        {
            name: "folder1",
            id: "1",
            playgrounds: [
                {
                    id: "1_1",
                    name: "playground1",
                    language: "javascript",
                },
                {
                    id: "1_2",
                    name: "playground2",
                    language: "javascript",
                },
            ]
        },
        {
            name: "folder2",
            id: "2",
            playgrounds: [
                {
                    id: "2_1",
                    name: "playground1",
                    language: "javascript",
                },
                {
                    id: "2_2",
                    name: "playground2",
                    name: "javascript",
                },
            ]
        },
    ])

    const deleteCard = (folderId, cardId) => {
        const newFolders = folders.map((folder) => {
            if(folder.id === folderId){
                folder['playgrounds'] = folder['playgrounds'].filter((playgrounds) => playgrounds.id !== cardId)
            }
            return folder;
        })
        setFolders(newFolders);
    }

    const deleteFolder = (folderId) => {
        setFolders(folders.filter((folder) => folder.id !== folderId));
    }

    return (
        <PlaygroundContext.Provider value={{folders, deleteFolder, deleteCard}}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;