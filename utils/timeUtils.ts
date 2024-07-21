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
    throw new Error('Invalid date format. Expected yyyy-dd-MM');
  }

  // Tách chuỗi thành các phần
  const [year, day, month] = dateString.split('-');

  // Tạo chuỗi mới với định dạng dd-MM-yyyy
  return `${day}-${month}-${year}`;
}