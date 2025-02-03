interface FormatDate {
  selectedDay: string | undefined;
  selectedMonth: string;
  selectedYear: string | undefined;
}

export const formatDate = (payload: FormatDate) => {
  const { selectedDay, selectedMonth, selectedYear } = payload;

  // Convert month name to number
  const monthNumber = new Date(`${selectedMonth} 1, 2000`).getMonth() + 1; // Ensure zero-based index

  // Ensure day and month are two digits (01, 02, etc.)
  const formattedDay = String(selectedDay).padStart(2, "0");
  const formattedMonth = String(monthNumber).padStart(2, "0");

  return `${selectedYear}-${formattedMonth}-${formattedDay}`;
};

export const validateDate = (dateString: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(dateString)) {
    return {
      valid: false,
      dateObj: null,
      message: "Invalid date format. Use YYYY-MM-DD.",
    };
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { valid: false, dateObj: null, message: "Invalid date value." };
  }

  return { valid: true, dateObj: date, message: "Success" };
};
