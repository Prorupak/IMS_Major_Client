/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    html {
        --color-primary: #345B63;
        --color-primary-dark: #25262D;
        --color-primary-light:#AACFCF;
        --color-secondary: #1CC8EE;
        --color-secondary-dark: #0096B7;
        --color-secondary-light: #D5F7FF;
        --color-error: #ED2E7E;
        --color-error-dark: #806570;
        --color-error-dark: #FFF2F7;
        --color-success:#00BA88;
        --color-success-dark:#00966D;
        --color-success-light:#F3FDFA;
        --color-grayscale-titleActive:#14142A;
        --color-header: #E3EBEB;
        --color-sidebar: #F2F8F8;
        --color-iconButton: #F0F0F0;

        --primary-font: 'Poppins', sans-serif;
        --secondary-font: 'Roboto', sans-serif;
        --fSize-1: 0.5rem; // 8
        --fSize-2: 0.5625rem; // 9
        --fSize-4: 0.625rem; //10
        --fSize-5: 0.6875rem; //11
        --fSize-6: 0.75rem; //12
        --fSize-7: 0.8125rem; //13
        --fSize-8: 0.875rem;
        --fSize-9: 0.9375rem;
        --fSize-11: 1rem;
        --fSize-12: 1.0625rem;
        --fSize-13: 1.125rem;
        --fSize-14: 1.25rem;
        --fSize-15: 1.375rem;
        --fSize-16: 1.5rem;
        --fSize-17: 1.625rem;
        --fSize-18: 1.6875rem;
        --fSize-19: 1.75rem;
        --fSize-20: 1.875rem;
        --fSize-21: 2rem;
        --fSize-22: 2.125rem;
        --fSize-23: 2.25rem;
        --fSize-24: 2.375rem;
        --fSize-25: 2.5rem;

        --spacing-3: 0.1875rem;
        --spacing-5: 0.3125rem;
        --spacing-8: 0.5rem;
        --spacing-10: 0.625rem;
        --spacing-12: 0.75rem;
        --spacing-14: 0.875rem;
        --spacing-15: 0.9375rem;
        --spacing-18: 1.125rem;
        --spacing-20: 1.25rem;
        --spacing-25: 1.5625rem;
        --spacing-30: 1.875rem;
        --spacing-35: 2.1875rem;
        --spacing-37: 2.3125rem;
        --spacing-40: 2.5rem;
        --spacing-45: 2.8125rem;
        --spacing-50: 3.125rem;
        --size-secSidebar: 12.5rem;
    }

    h1, h2, h3, h4, h5, h6 {
            font-weight: 500;
        }

        h1 {
            font-size: var(--fSize-25);
        }

        h2 {
            font-size: var(--fSize-22);
        }

        h3 {
            font-size: var(--fSize-20);
        }

        h4 {
            font-size: var(--fSize-18);
        }

        h5 {
            font-size: var(--fSize-14);
        }

        h6 {
            font-size: var(--fSize-12);
        }

        a {
        text-decoration: none;
    }

    body {
        overflow: hidden;
    }
    
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer
    }


             
    
`;

export const Error = styled.p`
  font-family: 'Poppins', sans-serif;
  color: red;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
`;

export const Button = styled.button.attrs({
  type: 'submit'
})`
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 5px 10px;
  background-color: var(--color-iconButton);
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04);
  p {
    font-style: normal;
    font-weight: normal;
    font-size: var(--fSize-11);
    line-height: var(--spacing-18);
    color: #fcfcfc;
  }

  &:hover {
    filter: contrast(0.9);
  }
`;
