import React from 'react';
interface Props {
    disabled: boolean;
    onClear: (() => void) | null;
}
declare const SelectMultipleValue: React.FC<React.PropsWithChildren<Props>>;
export default SelectMultipleValue;
