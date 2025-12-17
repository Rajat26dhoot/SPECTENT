import dayjs from 'dayjs';

export const inspectionData = {
  equipment: {
    name: "Fire Pump",
    id: "TECFI00009",
    tag: "FIR00009"
  },
  inspections: [
    {
      date: "2026-01-24",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Satisfactory"
    },
    {
      date: "2026-01-25",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Pending"
    },
    {
      date: "2026-01-24", 
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Pending"
    },
    {
      date: "2026-01-23",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Failed"
    },
    {
      date: "2026-01-22",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Satisfactory"
    },
    {
      date: "2026-01-21",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Satisfactory"
    },
    {
      date: "2026-01-20",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Satisfactory"
    },
    {
      date: "2026-01-19",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Satisfactory"
    },
    {
      date: "2026-01-18",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Satisfactory"
    },
    {
      date: "2026-01-17",
      taskName: "Task Name",
      taskDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      status: "Satisfactory"
    },
    {
      date: "2025-12-25",
      taskName: "Task Name",
      taskDescription: "Christmas Check",
      status: "Satisfactory"
    },
    {
      date: "2025-12-17",
      taskName: "Urgent Check",
      taskDescription: "Spot check for safety compliance",
      status: "Pending"
    },
    {
      date: "2025-12-10",
      taskName: "Routine Maintenance",
      taskDescription: "Standard weekly checkup",
      status: "Satisfactory"
    },
    {
      date: "2026-01-30",
      taskName: "End of Month Review",
      taskDescription: "Comprehensive monthly analysis",
      status: "Satisfactory"
    },
    {
      date: "2026-01-15",
      taskName: "Mid-Jan Check",
      taskDescription: "Checking pressure levels",
      status: "Satisfactory"
    },
    {
      date: "2026-01-05",
      taskName: "New Year Start",
      taskDescription: "Initial system boot sequence check",
      status: "Failed"
    },
    {
      date: "2026-02-14",
      taskName: "Valentine Check",
      taskDescription: "Heartbeat sensor verification",
      status: "Satisfactory"
    },
    {
      date: "2026-02-01",
      taskName: "Feb Start",
      taskDescription: "Monthly rotation check",
      status: "Pending"
    },
  ]
};

/**
 * Filter inspections by specific month and year
 * @param {number} year 
 * @param {number} month (0-11)
 * @returns {Array} List of inspections
 */
export const getInspectionsByMonth = (year, month) => {
  return inspectionData.inspections.filter(item => {
    const d = dayjs(item.date);
    return d.year() === year && d.month() === month;
  }).sort((a, b) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf()); 
};
