import * as React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { CalendarMonth, Today } from "@mui/icons-material";
import { Restore as RestoreIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    navigate(`/${newValue}`);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Incoming"
        value="todo"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction label="Today" value="today" icon={<Today />} />
      <BottomNavigationAction
        label="Calendar"
        value="calendar"
        icon={<CalendarMonth />}
      />
    </BottomNavigation>
  );
}
