import { NotificationManager} from 'react-notifications';

export const createNotification = (type, message,title, timeout) => {
    switch (type) {
      case 'info':
        NotificationManager.info(message, title, timeout);
        break;
      case 'success':
        NotificationManager.success(message, title, timeout);
        break;
      case 'warning':
        NotificationManager.warning(message, title, timeout);
        break;
      case 'error':
        NotificationManager.error(message, title, timeout);
        break;
    }
};
