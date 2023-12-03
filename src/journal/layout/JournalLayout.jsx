import { Box } from "@mui/material"
import { NavBar } from "../components"

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={drawerWidth} />
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
