import {Response as Res} from 'express';

const ok = (res: Res = res) => { return res.status(200) }
const error = (res: Res = res) => { return res.status(400) }
const notFound = (res: Res = res) => { return res.status(404) }
const teapot = (res: Res = res) => { return res.status(418) }
const internal = (res: Res = res) => { return res.status(500) }

const status = {
  ok: ok, 
  error: error,
  notFound: notFound,
  teapot: teapot,
  internal: internal
}

export {ok, error, notFound, teapot, internal};
export default status;
