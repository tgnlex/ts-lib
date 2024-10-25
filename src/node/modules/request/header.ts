const reqHeader = (req: any, name: string) => {
    let h = req.headers[`${name}`];
    return h;
}

export {reqHeader};
