import React from "react";

export interface Props{
    placeholder?: string;
    onChange?: (text: string) => void;
    isCaseInsensitive?: boolean;
}