import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import usePlatform, { Platform } from "../hooks/usePlatform";
import { BsFilterLeft, BsController } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformMenu = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { data: platforms } = usePlatform();

  return (
    <Box>
      <Button
        variant="contained"
        size="medium"
        endIcon={<BsFilterLeft />}
        onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
        sx={{
          borderRadius: 3,
          px: 3,
          py: 1,
          textTransform: "none",
          fontWeight: 600,
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          color: theme.palette.text.primary,
          "&:hover": {
            bgcolor: alpha(theme.palette.primary.main, 0.2),
          },
        }}
      >
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 3,
            minWidth: 200,
            boxShadow: theme.shadows[3],
            bgcolor: theme.palette.background.paper,
          },
        }}
      >
        {platforms.map((platform) => (
          <motion.div
            key={platform.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                onSelectPlatform(platform);
              }}
              sx={{
                py: 1.5,
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              <Box display="flex" alignItems="center" gap={1.5}>
                <BsController />
                <Typography variant="body1" fontWeight={500}>
                  {platform.name}
                </Typography>
              </Box>
            </MenuItem>
          </motion.div>
        ))}
      </Menu>
    </Box>
  );
};

export default PlatformMenu;
