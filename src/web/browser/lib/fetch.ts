enum HTTPMethods {
  GET = "GET", 
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH", 
  DELETE = "DELETE",
  HEAD = "HEAD", 
  TRACE = "TRACE",
  OPTION = "OPTION",
}
type FetchOptions = {
  json?: boolean;
  error?: string
}
async function fetcher(url: string, method?: HTTPMethods, body?: {} || any[], opts?: FetchOptions) {

  let fetchHeaders = new Headers();
  if (opts.json) {
    fetchHeaders.append("Content-Type": "application/json");
  }          
  if (method) {
    const res = await fetch(url, {
      method: method,
      header: fetchHeaders || undefined;
    });
  } else {
    const res = await fetch(url, {
      method: "POST",
      header: fetchHeaders || undefined;
    })
  }
  if  (opts.error) {
    if (!res.ok) { throw new Error(opts.error)}
  } else {
    if (!res.ok) { throw new Error(`Response Error: ${res.status}`) }
  }
  const data = await res.json();
  return data;
}
