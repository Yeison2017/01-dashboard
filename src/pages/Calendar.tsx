import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPublin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

import { useTheme } from "../hooks";
import { IStyles, ITokens } from "../interfaces";
import { TitlePage } from "../components";
import { formatDate } from "@fullcalendar/core";
// import { formatDate } from "@fullcalendar/core";

const styles = (colors?: ITokens): IStyles => ({
  container: {
    m: "20px",
  },
  containerCalendar: {
    display: "flex",
    justifyContent: "space-between",
  },
  containerBody: {
    flex: "1 1 20%",
    backgroundColor: colors?.primary[400],
    p: "15px",
    borderRadius: "4px",
  },
  listItem: {
    backgroundColor: colors?.greenAccent[500],
    margin: "10px 0",
    borderRadius: "2px",
  },
  calendar: {
    flex: "1 1 100%",
    ml: "15px",
  },
});

const Calendar = () => {
  const { colors } = useTheme();
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box sx={styles().container}>
      <TitlePage title="Calendar" subtitle="Full Calenar Interative Page" />
      <Box sx={styles().containerCalendar}>
        <Box sx={styles(colors).containerBody}>
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: any) => (
              <ListItem key={event.id} sx={styles(colors).listItem}>
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={styles().calendar}>
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPublin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev, next today",
              center: "title",
              right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: any) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day event", date: "2022-09-14" },
              { id: "4321", title: "Timed event", date: "2022-09-28" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
