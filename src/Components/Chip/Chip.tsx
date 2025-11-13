import { Box } from '@mui/material';

interface ChipProps {
  label: string;
}

const colors = {
  primary: '#D9663D',
  primaryLight: '#F0C4B4',
};

const Chip = ({ label }: ChipProps) => (
  <Box
    sx={{
      backgroundColor: colors.primaryLight,
      color: colors.primary,
      px: 2,
      py: 0.5,
      borderRadius: 4,
      fontSize: '0.875rem',
      fontWeight: 500
    }}
  >
    {label}
  </Box>
);

export default Chip;