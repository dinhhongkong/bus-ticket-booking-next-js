/**
 * Chuyển đổi chuỗi thời gian từ định dạng "HH:MM:SS" sang "HHhMM"
 * @param {string} time - Chuỗi thời gian cần định dạng (ví dụ: "09:00:00")
 * @returns {string} Chuỗi thời gian đã định dạng (ví dụ: "09h00")
 */
export function formatTime(time: String) {
  // Kiểm tra nếu time không phải là chuỗi hoặc không đúng định dạng
  if (!/^\d{2}:\d{2}:\d{2}$/.test(time)) {
    console.warn('formatTime: Invalid time format. Expected "HH:MM:SS"');
    return 'Invalid time';
  }

  // Tách giờ và phút
  const [hours, minutes] = time.split(':');

  // Trả về chuỗi định dạng mới
  return `${hours}h${minutes}`;
}


export function getHours(timeString) {
  const [hours] = timeString.split(':');
  return parseInt(hours, 10).toString();
}


export function formatDate(dateString: string): string {
  // Kiểm tra xem chuỗi ngày có đúng định dạng không
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) {
    throw new Error('Invalid date format. Expected yyyy-MM-dd');
  }

  // Tách chuỗi thành các phần
  const [year, month, day] = dateString.split('-');

  // Tạo chuỗi mới với định dạng dd-MM-yyyy
  return `${day}/${month}/${year}`;
}



/**
 * So sánh hai ngày có định dạng "yyyy-MM-dd".
 * @param {string} date1 - Ngày thứ nhất, định dạng "yyyy-MM-dd".
 * @param {string} date2 - Ngày thứ hai, định dạng "yyyy-MM-dd".
 * @returns {boolean} - Trả về true nếu date1 lớn hơn date2, ngược lại trả về false.
 */
export function isDateGreaterThan(date1, date2) {
  // Chuyển đổi chuỗi ngày thành đối tượng Date
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // So sánh hai đối tượng Date
  return d1 > d2;
}