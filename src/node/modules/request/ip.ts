function ip(req: Request, server: any) {
    const ipaddr = server.requestIP(req);
    return ipaddr;
  };

export {ip};