

const resHeader = (res: any, name: string): string => {
    let h = res.headers[`${name}`];
    return h;
}


export {resHeader};
