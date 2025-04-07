import { store } from '../redux/store'
import { pushNotification } from '../redux/notificationSlice'

export const startSocket = () => {
  const socket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum')
  socket.onmessage = (msg) => {
    const data = JSON.parse(msg.data)
    for (let key in data) {
      store.dispatch(pushNotification({
        type: 'price_alert',
        message: `${key.toUpperCase()} updated: $${data[key]}`
      }))
    }
  }
}
