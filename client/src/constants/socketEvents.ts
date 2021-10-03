const SOCKET_EVENT = `socket.event`;

export const SOCKETS_EVENT = {
  CONNECT: `connect`,
  DISCONNECT: `${SOCKET_EVENT}.disconnect`, // not used

  JOIN_ROOM: `join room`,
  ALL_USERS: `all users`,
  USER_JOINED_ROOM: `user joined`,
  RECEIVING_RETURNED_SIGNAL: `receiving returned signal`,
  SENDING_SIGNAL: `sending signal`,
  RETURNING_SIGNAL: `returning signal`,

  SEND_MESSAGE: `${SOCKET_EVENT}.send.message`,
  UPDATE_MESSAGE: `${SOCKET_EVENT}.update.message`,
};
