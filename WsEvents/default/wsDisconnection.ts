import {WsDefault_FromServer} from '.';

export namespace WsDisconnection {
  export const eventName: WsDefault_FromServer.eventName = 'disconnect';

  export type eventMessageTemplate = string;

  export class Dto implements WsDefault_FromServer.template {
    public readonly message: eventMessageTemplate;
    public readonly eventName = eventName;

    constructor(message: eventMessageTemplate) {
      this.message = message;
    }
  }
}
