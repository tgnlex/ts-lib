export type ActionType = "default" | "custom";
export interface Action {
  id: number; 
  name: string;
  type: ActionType;
}
export interface DefaultAction extends Action { type: "default" }
export interface CustomAction extends Action { type: "custom" }
export interface LOG extends DefaultAction {id: 1, name: "log"}
export interface FILE extends DefaultAction {id: 2, name: "file"}
export interface ERROR extends DefaultAction  {id: 3, name: "error"}
export interface NONE extends DefaultAction {id: 4, name: "none"}
export interface CustomActions {[key: string]: CustomAction}
export type LogAction = LOG | FILE | ERROR | NONE | CustomAction;

export interface DefaultActions  {
  log: LOG;
  file: FILE;
  error: ERROR;
  none: NONE;
}

