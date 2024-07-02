


export const useStyles = (random: boolean) => ({
    input: {
        '& .MuiInputBase-input.MuiOutlinedInput-input ': {
            backgroundColor: random ?'#ccc' : '#ddd',
            borderRadius: '4px'

        },
        // borderRadius: '10px',
        '&:hover': {
            // backgroundColor: '#00f'
        }
    },
    wrapper: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#DDD',
        // '& .MuiInputBase-input': {}
    }
})