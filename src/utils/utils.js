export function deepclone(obj){
    return JSON.parse(JSON.stringify(obj));
}

export function log(content) {
    console.log(`[Yuga log]: ${JSON.stringify(content)}`);
  }