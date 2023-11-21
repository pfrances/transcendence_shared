import {HttpEndPointBase, HttpMethod} from '../enum';
import {UserPublicProfile} from '../interfaces';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpAllUsers {
  export const method = HttpMethod.GET;
  export const endPoint = '/all';
  export const endPointFull = `${HttpEndPointBase.USER}${endPoint}`;

  export class reqTemplate {}

  export class resTemplate {
    public users: UserPublicProfile[];

    constructor(users: UserPublicProfile[]) {
      this.users = users;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(authToken: string) {
      super(endPointFull, method, reqTemplate, resTemplate, authToken);
    }
  }
}