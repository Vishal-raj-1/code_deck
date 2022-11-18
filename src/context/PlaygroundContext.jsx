import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

export const PlaygroundContext = createContext();

const PlaygroundProvider = ({ children }) => {

    const initialItems = {
        [uuid()]: {
            title: "DSA",
            playgrounds: {
                [uuid()]: {
                    title: "Stack Implementation",
                    language: "c++",
                },
                [uuid()]: {
                    name: "Array",
                    language: "javascript",
                },
            }
        },
    }

    const [folders, setFolders] = useState(() => {
        let localData = localStorage.getItem('playgrounds-data');
        if (localData === null || localData === undefined) {
            return initialItems;
        }

        return JSON.parse(localData);
    })

    useEffect(() => {
        localStorage.setItem('playgrounds-data', JSON.stringify(folders));
    }, [folders])

    const deleteCard = (folderId, cardId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId].playgrounds[cardId];
            return newState;
        });
    }

    const deleteFolder = (folderId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId];
            return newState;
        });
    }

    const addFolder = (folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[uuid()] = {
                title: folderName,
                playgrounds: {}
            }

            return newState;
        })
    }

    const addPlayground = (folderId, playgroundName, language) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[folderId].playgrounds[uuid()] = {
                title: playgroundName,
                language: language
            }

            return newState;
        })
    }

    const addPlaygroundAndFolder = (folderName, playgroundName, language) => {
        setFolders((oldState) => {
            const newState = { ...oldState }

            newState[uuid()] = {
                title: folderName,
                playgrounds: {
                    [uuid()]: {
                        title: playgroundName,
                        language: language
                    }
                }
            }

            return newState;
        })
    }

    const editFolderTitle = (folderId, folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].title = folderName;
            return newState;
        })
    }

    const editPlaygroundTitle = (folderId, cardId, PlaygroundTitle) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].playgrounds[cardId].title = PlaygroundTitle;
            return newState;
        })
    }

    const PlayGroundFeatures = {
        folders: folders,
        deleteCard: deleteCard,
        deleteFolder: deleteFolder,
        addFolder: addFolder,
        addPlayground: addPlayground,
        addPlaygroundAndFolder: addPlaygroundAndFolder,
        editFolderTitle: editFolderTitle,
        editPlaygroundTitle: editPlaygroundTitle,
    }

    return (
        <PlaygroundContext.Provider value={PlayGroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;