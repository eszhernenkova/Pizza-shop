import { InputHTMLAttributes } from 'react';

export interface SearchProps  extends InputHTMLAttributes<HTMLElement>{
    isValid?: boolean;
}