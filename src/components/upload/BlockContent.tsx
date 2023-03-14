// @mui
import { Box, Typography, Stack } from '@mui/material';
// assets
import { UploadIllustration } from '../../assets';

// ----------------------------------------------------------------------

interface Props {
  label?: string;
}

export default function BlockContent({ label }: Props) {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction={{ xs: 'column', md: 'row' }}
      sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
    >
      {/* <UploadIllustration sx={{ width: 220 }} /> */}

      <Box sx={{ p: 0 }}>
        <Typography gutterBottom variant="caption" className='text-center' sx={{ display: { xs: 'block', sm: 'block', variant: "caption" } }}>
          Drop or Select<br/> file<br />
          <Typography
            variant="caption"
            component="span"
            sx={{ color: 'primary.main', textDecoration: 'underline' }}
          >
            browse
          </Typography>
        </Typography>


        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Drop files here or click&nbsp;
          <Typography
            variant="body2"
            component="span"
            sx={{ color: 'primary.main', textDecoration: 'underline' }}
          >
            browse
          </Typography>
          &nbsp;thorough your machine
        </Typography> */}
      </Box>
    </Stack>
  );
}
