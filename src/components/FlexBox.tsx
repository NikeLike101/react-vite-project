import { Box } from '@mui/material';
import { BoxOwnProps } from '@mui/system/Box/Box';
import React from 'react';

type Props = {
    column?: boolean;
    stretched?: boolean;
};
const FlexBox: React.FC<Props & BoxOwnProps & React.HTMLAttributes<HTMLDivElement>> = props => {
    const getSxStyles = () => {
        let styles: Record<string, string | number> = {
            display: 'flex',
        };

        if (props.sx !== undefined && props.sx !== null && typeof props.sx === 'object') {
            Object.keys(props.sx).forEach(key => {
                styles[key] = props.sx[key];
            });
        }

        if (props.column) {
            styles = { ...styles, flexDirection: 'column' };
        }
        if (props.stretched) {
            styles = { ...styles, flex: 1 };
        }

        return styles;
    };
    return <Box {...props} sx={getSxStyles()} />;
};

export default FlexBox;