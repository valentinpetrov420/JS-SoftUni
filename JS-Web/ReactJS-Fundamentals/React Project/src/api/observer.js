let subscriptions = {
    'loginUser': [],
    'loggedOut': [],
    'notification': [],
};

export default {
    events: {
        loginUser: 'loginUser',
        notification: 'notification',
        loggedOut: 'loggedOut',
    },
    subscribe: (eventName, fn) =>
        subscriptions[eventName].push(fn),
    trigger: (eventName, data) =>
        subscriptions[eventName].forEach(fn => fn(data))
}