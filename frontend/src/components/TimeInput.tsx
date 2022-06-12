import React from 'react';

interface TimeInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TimeInput = (props: TimeInputProps) => (
    <input
        type="time"
        value={props.value}
        onChange={props.onChange}
    />
)

export default TimeInput;