import { createGlobalStyle } from 'styled-components';

export const GlobalStyle: React.FC = createGlobalStyle`
    body {
        color: var(--mainColor);
        background: var(--bgColor);
    }
`;
