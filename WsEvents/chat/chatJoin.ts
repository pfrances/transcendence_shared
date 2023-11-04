import {WsChat_FromServer} from '.';

export namespace WsChatJoin {
  export const eventName: WsChat_FromServer.eventName = 'chatJoin';

  export interface eventMessageTemplate {
    userId: number;
    chatId: number;
  }

  export class Dto implements WsChat_FromServer.template {
    public message: eventMessageTemplate;
    public eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}