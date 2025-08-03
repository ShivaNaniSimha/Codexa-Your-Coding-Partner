import { io } from 'socket.io-client';

let socket;

export const initializeSocket = (token) => {
  if (socket) {
    socket.disconnect();
  }

  socket = io("https://codexa.live", {
    auth: { token },
    withCredentials: true,
    transports: ['websocket', 'polling'],
  });

  socket.on('connect', () => {
    console.log('Socket connected:', socket.id);
  });

  socket.on('connect_error', (error) => {
    console.error('Socket connection error:', error.message);
  });

  socket.on('disconnect', (reason) => {
    console.log('Socket disconnected:', reason);
  });

  return socket;
};

export const getSocket = () => {
  if (!socket) {
    console.warn('Socket not initialized. Call initializeSocket first.');
    return null;
  }
  return socket;
};

export const joinDiscussion = (discussionId) => {
  if (!socket) return;
  socket.emit('join-discussion', discussionId);
};

export const leaveDiscussion = (discussionId) => {
  if (!socket) return;
  socket.emit('leave-discussion', discussionId);
};

export const emitTyping = (discussionId, user) => {
  if (!socket) return;
  socket.emit('typing', { discussionId, user });
};

export const emitStopTyping = (discussionId) => {
  if (!socket) return;
  socket.emit('stop-typing', { discussionId });
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

