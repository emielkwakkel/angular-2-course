export function welcome(name? : string) {
    if(!name) {
        return 'Welcome!';
    }
    return `Welcome ${name}!`;
}