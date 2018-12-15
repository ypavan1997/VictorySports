import { NotificationManager} from 'react-notifications';

export const createNotification = (type, message, timeout) => {
    switch (type) {
      case 'info':
        NotificationManager.info(message, 'Info', timeout);
        break;
      case 'success':
        NotificationManager.success(message, 'Success', timeout);
        break;
      case 'warning':
        NotificationManager.warning(message, 'Warning', timeout);
        break;
      case 'error':
        NotificationManager.error(message, 'Error', timeout);
        break;
    }
};
