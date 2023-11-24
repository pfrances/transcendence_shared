import {UserPublicProfile} from '../interfaces';
import {HttpEndPointBase, HttpMethod} from '../enum';
import {ARequestSender} from '../interfaces/ARequestSender';

export namespace HttpSignUp {
  export const method = HttpMethod.POST;
  export const endPoint = '/signup';
  export const endPointFull = `${HttpEndPointBase.AUTH}${endPoint}`;

  export class reqTemplate {
    public nickname: string;
    public email: string;
    public password: string;
    public avatarUrl?: string;

    constructor(dto: reqTemplate) {
      this.nickname = dto.nickname;
      this.email = dto.email;
      this.password = dto.password;
      this.avatarUrl = dto.avatarUrl;
    }
  }

  export class resTemplate {
    public userId: number;
    public nickname: string;
    public avatarUrl: string | null;
    public authToken: string;

    constructor(dto: UserPublicProfile & {authToken: string}) {
      this.userId = dto.userId;
      this.nickname = dto.nickname;
      this.avatarUrl = dto.avatarUrl;
      this.authToken = dto.authToken;
    }
  }

  export class requestSender extends ARequestSender<reqTemplate, resTemplate> {
    constructor(req: reqTemplate) {
      super(endPointFull, method, req, resTemplate);
    }
  }
}
