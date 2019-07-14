import { getNotificationsContext } from 'svelte-notifications';

export const toastMsg = text => {
  const { addNotification } = getNotificationsContext();
  addNotification({
    id: new Date().getTime(),
    text: text,
    removeAfter: 2000,
    position: 'top-center',
  });
};
