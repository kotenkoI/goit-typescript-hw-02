import SearchBar from "@/components/SearchBar/SearchBar.tsx";
import {useState} from "react";
import ImageGallery from "@/components/ImageGallery/ImageGallery.tsx";
import {useInfiniteQuery} from "@tanstack/react-query";
import { getImages } from "@/services/apiService.ts";

import ImageCard from "@/components/ImageCard/ImageCard.tsx";
import LoadMoreButton from "@/components/LoadMoreBtn/LoadMoreButton.tsx";
import ImageModal from "@/components/ImageModal/ImageModal.tsx";
import Loader from "@/components/Loader/Loader.tsx";
import ErrorMessage from "@/components/ErrorMessage/ErrorMessage.tsx";

const App: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const [currentImageModal, setCurrentImageModal] = useState<string>('');

    const handleToggleModal = () => setModalIsOpen(!modalIsOpen);
    const setNewQuery = (query: string) => setQuery(query);

    const {
        data,
        isLoading,
        isError,
        error,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: [query],
        queryFn: ({ pageParam }) => getImages(query, pageParam),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
            if (lastPageParam <= lastPage.total_pages) {
                return lastPageParam + 1;
            }
        },
        enabled: !!query,
    });

    if (isError) {
        return (
            <>
                <SearchBar setNewQuery={setNewQuery} />
                <ErrorMessage error={error} />
            </>
        );
    }

    if (isLoading) {
        return (
            <>
                <SearchBar setNewQuery={setNewQuery} />
                <Loader />
            </>
        );
    }

    return (
        <>
            <SearchBar setNewQuery={setNewQuery} />

            {data && (
                <ImageGallery>
                    {data?.pages.map((page, i) => {
                        return isLoading ? (
                            <Loader key={i} />
                        ) : (
                            page.results.map((el) => (
                                <ImageCard
                                    key={el.id}
                                    card={el}
                                    toggleModal={handleToggleModal}
                                    setImageModal={setCurrentImageModal}
                                />
                            ))
                        );
                    })}
                </ImageGallery>
            )}

            {hasNextPage && (
                <LoadMoreButton
                    isFetching={isFetchingNextPage}
                    fetchNext={fetchNextPage}
                />
            )}

            <ImageModal
                modalIsOpen={modalIsOpen}
                handleClose={handleToggleModal}
            >
                <img src={currentImageModal} className='w-full h-full' alt='' />
            </ImageModal>
        </>
    );
};

export default App;