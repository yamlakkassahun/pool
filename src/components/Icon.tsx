import { Box, BoxProps } from '@mui/material'
import React from 'react'

interface Props extends BoxProps {
    src: string;
    color: string;
}
  
const Icon = ({ src, color }: Props ) => {
    return (
        <Box
            component="span"
            sx={{
                width: 24,
                height: 24,
                display: 'inline-block',
                color: `${color}`,
                bgcolor: 'currentColor',
                mask: `url(${src}) no-repeat center / contain`,
                WebkitMask: `url(${src}) no-repeat center / contain`,
            }}
        />
    )
}

export default Icon