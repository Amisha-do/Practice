import React from 'react';
import { TextField, Button } from '@mui/material';

interface TextInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    error?: boolean;
    helperText?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, type = 'text', error = false, helperText }) => {
    return (
        <TextField
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            fullWidth
            variant="outlined"
            type={type}
            sx={{ mb: 2 }}
            error={error}
            helperText={helperText}
        />
    );
};

interface ButtonProps {
    onClick: () => void;
    disabled: boolean;
    children: React.ReactNode;
}

export const SubmitButton: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            disabled={disabled}
            fullWidth
        >
            {children}
        </Button>
    );
};
