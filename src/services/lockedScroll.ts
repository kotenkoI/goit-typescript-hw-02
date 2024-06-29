export const lockedScroll = (bool: boolean): void => {
    if (bool) {
        document.body.classList.add('scroll-locked');
    } else {
        document.body.classList.remove('scroll-locked');
    }
};
