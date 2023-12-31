import {WsDefault_FromServer} from '.';

export namespace WsConnection {
  export const eventName: WsDefault_FromServer.eventName = 'connect';

  export type eventMessageTemplate = string;

  export class Dto implements WsDefault_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}
