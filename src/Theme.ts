export const theme = {
  formTheme: {
    form: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 2fr)',
      gap: '1rem',
      maxWidth: '600px',
      margin: 'auto',
      '@media (max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    radioContainer: {
      backgroundColor: '#F4F4F4',
      display: 'flex',
      alignItems: 'center',
      padding: {
        top: '2rem',
        left: '1rem',
        bottom: '2rem',
        right: '3rem',
      },
    },
    radioInput: {
      marginRight: '.5rem',
      color: '#EE9C37',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
};
