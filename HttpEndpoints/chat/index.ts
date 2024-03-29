import {HttpEndPointBase} from '../enum';
import {HttpCreateChat} from './createChat';
import {HttpGetAllChats} from './getAllChats';
import {HttpGetChatInfo} from './getChatInfo';
import {HttpGetDirectMessages} from './getDirectMessages';
import {HttpJoinChat} from './joinChat';
import {HttpLeaveChat} from './leaveChat';
import {HttpUpdateChat} from './updateChat';
import {HttpUpdateChatParticipation} from './updateChatParticipation';

export {
  HttpGetAllChats,
  HttpCreateChat,
  HttpGetChatInfo,
  HttpJoinChat,
  HttpLeaveChat,
  HttpUpdateChat,
  HttpUpdateChatParticipation,
  HttpGetDirectMessages,
};

export namespace HttpChat {
  export import getAll = HttpGetAllChats;
  export import create = HttpCreateChat;
  export import getInfo = HttpGetChatInfo;
  export import join = HttpJoinChat;
  export import leave = HttpLeaveChat;
  export import update = HttpUpdateChat;
  export import updateParticipation = HttpUpdateChatParticipation;
  export import getDirectMessages = HttpGetDirectMessages;

  export const endPointBase = HttpEndPointBase.CHAT;

  export type reqTemplate =
    | getAll.reqTemplate
    | create.reqTemplate
    | getInfo.reqTemplate
    | join.reqTemplate
    | leave.reqTemplate
    | update.reqTemplate
    | updateParticipation.reqTemplate
    | getDirectMessages.reqTemplate;

  export type resTemplate =
    | getAll.resTemplate
    | create.resTemplate
    | getInfo.resTemplate
    | join.resTemplate
    | leave.resTemplate
    | update.resTemplate
    | updateParticipation.resTemplate
    | getDirectMessages.resTemplate;

  export type requestSender =
    | getAll.requestSender
    | create.requestSender
    | getInfo.requestSender
    | join.requestSender
    | leave.requestSender
    | update.requestSender
    | updateParticipation.requestSender
    | getDirectMessages.requestSender;
}
