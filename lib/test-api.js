export async function getMessage() {
    return {message: 'hello from shared module'}
}

export function createHelloGreating(name) {
    return {message: `hello, ${name} from shared module`}
}