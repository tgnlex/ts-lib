const reqs = {
  header: (req = req, name: string) => {
    let h = request.headers[`${name}`];
    return h;
  }
}
