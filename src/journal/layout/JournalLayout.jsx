import { Box } from "@mui/material"

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            {/* Navbar */}
            {/* Sidebar */}

            <Box
                component='main'
                sx={{ flexgrow: 1, p: 3 }}
            >
                {/* Toolbar */}


                {children}
            </Box>

        </Box>
    )
}
